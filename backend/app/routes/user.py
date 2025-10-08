from fastapi import APIRouter

router = APIRouter(prefix="/user", tags=["user"])

@router.get("/")
def get_users():
    return [{"id": 1, "name": "Matheus"}]
