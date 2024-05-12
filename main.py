from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import math
import psycopg2

app = FastAPI()


app.mount("/static", StaticFiles(directory="build/static"), name="static")

@app.get("/")
async def serve_react_app():
    return FileResponse("build/index.html")


origins = [

    "http://127.0.0.1:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


class InputData(BaseModel):
    widtMat: float
    widtWall: float
    lengMat: float
    lengWall: float
    highMat: float
    highWall: float
    SizeMat: str
    SizeWall: str
    

class InputData2(BaseModel):
    ChoiceMat: str
    widtMat: float
    lengMat: float
    highMat: float
    Brickwork: str
    Perimetre: float
    HighWall: float
    CountDoor: float
    CountWindow: float
    HighDoor: float
    HighWindow: float
    LengDoor: float
    LengWindow: float


@app.post("/calculate", tags=["calculate"])
async def add_calculate(request: Request):
    try:
        data = await request.json()
        input_data = InputData(**data)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid JSON data")
    
    result = calculate(input_data)


    return {"result": result}

@app.post("/calculateTwo", tags=["calculateTwo"])
async def add_calculate(request: Request):
    try:
        data = await request.json()
        input_data_2 = InputData2(**data)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid JSON data")
    
    result2 = calculateHouse(input_data_2)


    return {"result": result2}


def calculate(input_data):
    length_brick = input_data.lengMat
    width_brick = input_data.widtMat
    height_brick = input_data.highMat
    length_wall = input_data.lengWall
    width_wall = input_data.widtWall
    height_wall = input_data.highWall
    Size_Mat = input_data.SizeMat
    Size_Wall = input_data.SizeWall
    option_brick = 1
    option_wall = 1

    if Size_Mat == "milimetre":
        option_brick = 1
    elif Size_Mat == "centimetre":
        option_brick = 10
    elif Size_Mat == "metre":
        option_brick = 1000

    if Size_Wall == "milimetre":
        option_wall = 1
    elif Size_Wall == "centimetre":
        option_wall = 10
    elif Size_Wall == "metre":
        option_wall = 1000

    def calc(length_brick, width_brick, height_brick, length_wall, width_wall, height_wall, option_brick, option_wall):
        result = ((length_wall * option_wall) / (length_brick * option_brick) * (width_wall * option_wall) / (width_brick * option_brick) * (height_wall * option_wall) / (height_brick * option_brick))
        return math.ceil(result)

    return calc(length_brick, width_brick, height_brick, length_wall, width_wall, height_wall, option_brick, option_wall)
    

def calculateHouse(input_data):

    choice_mat = input_data.ChoiceMat
    length_brick = input_data.lengMat
    width_brick = input_data.widtMat
    height_brick = input_data.highMat
    perimetre = input_data.Perimetre
    wall_height = input_data.HighWall
    window_length = input_data.LengWindow
    window_height = input_data.HighWindow
    window_quantity = input_data.CountWindow
    door_length = input_data.LengDoor
    door_height = input_data.HighDoor
    door_quantity = input_data.CountDoor
    brickwork = 0.12
    brickwork = float(input_data.Brickwork)
    v_brick = 0

    if choice_mat == "":
        v_brick = (length_brick*0.001) * (width_brick*0.001) * (height_brick*0.001)
    else:
        
        conn = psycopg2.connect(dbname='BLAZEDtech', user='postgres', password='ei82mf', host='localhost')
        cursor = conn.cursor()
        cursor.execute("SELECT volume FROM bricks WHERE type_brick = %s", (choice_mat))
        sizes = cursor.fetchall()
        cursor.close()
        conn.close()

        for item in sizes:
            v_brick = float(item[0])

    def calc(perimetre, wall_height, window_length, window_height, window_quantity, door_length, door_height, door_quantity):
        s_wall  = perimetre * wall_height
        s_window_and_door = (window_length * window_height * window_quantity) + (door_length *  door_height * door_quantity)
        s_kladka = s_wall - s_window_and_door
        v_kladka = s_kladka * brickwork
        v_shov = s_kladka * 0.012
        result = (v_kladka + v_shov) / v_brick
        return math.ceil(result)
    
    return calc(perimetre, wall_height, window_length, window_height, window_quantity, door_length, door_height, door_quantity)
