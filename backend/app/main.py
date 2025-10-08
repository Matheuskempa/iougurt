import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

# Import absoluto para evitar problemas de import
from app.routes import user

app = FastAPI()

# Caminho absoluto para a pasta do próprio main.py
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")

# Monta a pasta de arquivos estáticos (favicon, imagens, etc)
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# Inclui as rotas do user
app.include_router(user.router)

# Rota raiz
@app.get("/")
def read_root():
    return {"message": "API funcionando!"}

# Rota para favicon
@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    file_path = os.path.join(STATIC_DIR, "favicon.png")
    return FileResponse(file_path)
