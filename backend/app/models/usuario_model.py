from sqlalchemy import Column, BigInteger, String, Boolean, DateTime
from app.database import Base
from datetime import datetime

class Usuario(Base):
    __tablename__ = "usuario"

    id = Column(BigInteger, primary_key=True, index=True)
    nome = Column(String(200), nullable=False)
    tipo = Column(String(50), nullable=True)
    email = Column(String(150), unique=True, index=True, nullable=False)
    senha = Column(String(255), nullable=False)
    funcao = Column(String(100), nullable=True)
    flag_ativo = Column(Boolean, default=True)
    ultimo_login = Column(DateTime, nullable=True)
    data_criacao = Column(DateTime, default=datetime.utcnow)
    data_alteracao = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
