from sqlalchemy import Column, BigInteger, String, Boolean, DateTime, ForeignKey
from app.database import Base
from datetime import datetime

class Empresa(Base):
    __tablename__ = "empresa"

    id = Column(BigInteger, primary_key=True, index=True)
    nome_fantasia = Column(String(200), nullable=False)
    tipo = Column(String(50), nullable=True)
    cnpj = Column(String(18), nullable=True, unique=True)
    email = Column(String(150), nullable=True)
    telefone_comercial_fixo = Column(String(20), nullable=True)
    telefone_comercial_fixo_reserva = Column(String(20), nullable=True)
    celular_comercial = Column(String(20), nullable=True)
    endereco = Column(String(255), nullable=True)
    cidade = Column(String(100), nullable=True)
    estado = Column(String(50), nullable=True)
    cep = Column(String(10), nullable=True)
    site = Column(String(150), nullable=True)
    ativo = Column(Boolean, default=True)
    # id_plano = Column(BigInteger, ForeignKey("plano.id"), nullable=True)
    data_criacao = Column(DateTime, default=datetime.utcnow)
    data_alteracao = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
