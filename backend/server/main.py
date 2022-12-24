import os
from fastapi import FastAPI, APIRouter
from fastapi.exceptions import HTTPException
from fastapi.middleware.cors import CORSMiddleware 
from fastapi.responses import JSONResponse

from server.key_handler import RedisHandler 
from server.models import AgeData, NewToken
from server.email_handler import EmailSender

app: FastAPI = FastAPI()
router: APIRouter = APIRouter()
key_handler: RedisHandler = RedisHandler()
email_handler: EmailSender = EmailSender()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@router.get("/health")
async def health() -> dict:
    return {
        "detail": "online"
    }

@router.post("/age-data")
async def age_data(request: AgeData) -> JSONResponse:
    if not key_handler.validate_key(request.verification_key):
        raise HTTPException(403, "Invalid token") 
    email_handler.send_data_email(str(request.json()))   
    key_handler.delete_key(request.verification_key)
    return JSONResponse({"detail": "Request handled successfully"}, 200)

@router.post("/token")
async def token(request: NewToken) -> JSONResponse:
    if not os.environ['REQUEST_TOKEN'] == request.request_token: 
        raise HTTPException(403, "Invalid token")
    key: str = os.urandom(16).hex()
    key_handler.set_key(key)
    return JSONResponse({"detail": "Link generated successfully", "link": f"{os.environ['FRONTEND_URL']}?risen_key={key}"}) 

@router.get("/validate")
async def validate_token(risen_key: str) -> JSONResponse:
    if not key_handler.validate_key(risen_key):
        raise HTTPException(403, "Invalid token") 
    return JSONResponse({"detail": "Token is valid"})

app.include_router(router) 
