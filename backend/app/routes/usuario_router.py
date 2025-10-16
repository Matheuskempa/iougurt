from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.usuario_model import Usuario
from app.schemas.usuario_schema import UsuarioCreate, UsuarioOut, UsuarioLogin
from passlib.context import CryptContext

router = APIRouter(
    prefix="/usuario",
    tags=["Usuario"]
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def authenticate_user(db: Session, email: str, password: str):
    """Retorna o usuário se email e senha estiverem corretos"""
    user = db.query(Usuario).filter(Usuario.email == email).first()
    if not user:
        return None
    if not verify_password(password, user.senha):
        return None
    return user

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=UsuarioOut)
def create_user(user: UsuarioCreate, db: Session = Depends(get_db)):
    existing_user = db.query(Usuario).filter(Usuario.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email já cadastrado")
    print(user.senha)
    hashed_password = hash_password(user.senha)
    db_user = Usuario(
        nome=user.nome,
        tipo=user.tipo,
        email=user.email,
        senha=hashed_password,
        funcao=user.funcao,
        flag_ativo=user.flag_ativo
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


@router.post("/login", response_model=UsuarioOut)
def login(user_data: UsuarioLogin, db: Session = Depends(get_db)):
    user = authenticate_user(db, user_data.email, user_data.senha)
    if not user:
        raise HTTPException(status_code=401, detail="Email ou senha incorretos")
    return user