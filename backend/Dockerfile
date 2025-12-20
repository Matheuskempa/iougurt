# Usa uma imagem leve do Python
FROM python:3.11-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código do app
COPY app ./app

# Expõe a porta usada pelo FastAPI (8000 por padrão)
EXPOSE 8000

# Comando padrão para iniciar o servidor
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
