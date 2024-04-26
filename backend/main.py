from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import math

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
   # CountWall: float
    SizeMat: str
    SizeWall: str
 

@app.post("/calculate", tags=["calculate"])
async def add_calculate(request: Request):
    try:
        data = await request.json()
        input_data = InputData(**data)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid JSON data")
    
    result = calculate(input_data)


    return {"result": result}


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
    

#def calculateHouse(input_data):
#    length_brick = input_data.lengMat
#    width_brick = input_data.widtMat
#    height_brick = input_data.highMat
#    length_wall = input_data.lengWall
#    width_wall = input_data.widtWall
#    height_wall = input_data.highWall
#    Size_Mat = input_data.SizeMat
#    Size_Wall = input_data.SizeWall
#    option_brick = 1
#    option_wall = 1
#    count_wall = input_data.CountWall
#
#    if Size_Mat == "milimetre":
#        option_brick = 1
#    elif Size_Mat == "centimetre":
#        option_brick = 10
#    elif Size_Mat == "metre":
#        option_brick = 1000
#
#    if Size_Wall == "milimetre":
#        option_wall = 1
#    elif Size_Wall == "centimetre":
#        option_wall = 10
#    elif Size_Wall == "metre":
#        option_wall = 1000
#
#    def calc(length_brick, width_brick, height_brick, length_wall, width_wall, height_wall, option_brick, option_wall, count_wall):
#        result = count_wall * ((length_wall * option_wall) / (length_brick * option_brick) * (width_wall * option_wall) / (width_brick * option_brick) * (height_wall * option_wall) / (height_brick * option_brick))
#        return math.ceil(result)
#
#    return calc(length_brick, width_brick, height_brick, length_wall, width_wall, height_wall, option_brick, option_wall, count_wall)