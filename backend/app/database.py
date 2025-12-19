import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from sqlalchemy.ext.declarative import declarative_base

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


Base = declarative_base()
def test_connection():
    try:
        with engine.connect() as conn:
            print("✅ Conexão com o banco estabelecida com sucesso!")
    except Exception as e:
        print("❌ Erro ao conectar no banco:", e)

from sqlalchemy.orm import Session

# Dependência para fornecer uma sessão do banco
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
