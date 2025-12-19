from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UsuarioCreate(BaseModel):
    nome: str
    tipo: Optional[str] = None
    email: EmailStr
    senha: str
    funcao: Optional[str] = None
    flag_ativo: Optional[bool] = True

class UsuarioOut(BaseModel):
    id: int
    nome: str
    tipo: Optional[str]
    email: EmailStr
    funcao: Optional[str]
    flag_ativo: bool
    ultimo_login: Optional[datetime]
    data_criacao: datetime
    data_alteracao: datetime

    class Config:
        orm_mode = True  # permite transformar objetos SQLAlchemy em JSON

class UsuarioLogin(BaseModel):
    email: EmailStr
    senha: str
