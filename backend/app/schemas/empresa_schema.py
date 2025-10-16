from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class EmpresaBase(BaseModel):
    nome_fantasia: str
    tipo: Optional[str] = None
    cnpj: Optional[str] = None
    email: Optional[EmailStr] = None
    telefone_comercial_fixo: Optional[str] = None
    telefone_comercial_fixo_reserva: Optional[str] = None
    celular_comercial: Optional[str] = None
    endereco: Optional[str] = None
    cidade: Optional[str] = None
    estado: Optional[str] = None
    cep: Optional[str] = None
    site: Optional[str] = None
    ativo: Optional[bool] = True
    # id_plano: Optional[int] = None

class EmpresaCreate(EmpresaBase):
    pass

class EmpresaUpdate(EmpresaBase):
    nome_fantasia: Optional[str] = None

class EmpresaOut(EmpresaBase):
    id: int
    data_criacao: datetime
    data_alteracao: datetime

    class Config:
        orm_mode = True
