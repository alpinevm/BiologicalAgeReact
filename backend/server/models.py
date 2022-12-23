from pydantic import BaseModel

class AgeData(BaseModel):
    verification_key: str
    question_responses: list
    first_name: str     
    age: int

class NewToken(BaseModel):
    request_token: str

