import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from app.database import test_connection
from app.routes.user import router as user_router
from app.models.usuario_model import Base
from app.database import engine

app = FastAPI()

# Configuração de CORS
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Caminho para a pasta de arquivos estáticos
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# Cria tabelas no banco
Base.metadata.create_all(bind=engine)

# Inclui as rotas do user
app.include_router(user_router)

# Rota raiz
@app.get("/")
def read_root():
    test_connection()
    return {"message": "API funcionando!"}

# Rota para favicon
@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    file_path = os.path.join(STATIC_DIR, "favicon.png")
    return FileResponse(file_path)
