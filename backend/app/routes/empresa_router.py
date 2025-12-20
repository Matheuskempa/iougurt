from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.empresa_model import Empresa
from app.schemas.empresa_schema import EmpresaCreate, EmpresaUpdate, EmpresaOut

router = APIRouter(
    prefix="/empresa",
    tags=["Empresa"]
)

# ------------------------
# Criar empresa
# ------------------------
@router.post("/", response_model=EmpresaOut)
def create_empresa(empresa: EmpresaCreate, db: Session = Depends(get_db)):
    db_empresa = Empresa(**empresa.dict())
    db.add(db_empresa)
    db.commit()
    db.refresh(db_empresa)
    return db_empresa

# ------------------------
# Listar todas empresas
# ------------------------
@router.get("/", response_model=list[EmpresaOut])
def get_empresas(db: Session = Depends(get_db)):
    return db.query(Empresa).all()

# ------------------------
# Buscar empresa por ID
# ------------------------
@router.get("/{empresa_id}", response_model=EmpresaOut)
def get_empresa(empresa_id: int, db: Session = Depends(get_db)):
    empresa = db.query(Empresa).filter(Empresa.id == empresa_id).first()
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa não encontrada")
    return empresa

# ------------------------
# Atualizar empresa
# ------------------------
@router.put("/{empresa_id}", response_model=EmpresaOut)
def update_empresa(empresa_id: int, empresa_data: EmpresaUpdate, db: Session = Depends(get_db)):
    empresa = db.query(Empresa).filter(Empresa.id == empresa_id).first()
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa não encontrada")
    
    for key, value in empresa_data.dict(exclude_unset=True).items():
        setattr(empresa, key, value)

    db.commit()
    db.refresh(empresa)
    return empresa

# ------------------------
# Deletar empresa
# ------------------------
@router.delete("/{empresa_id}", response_model=dict)
def delete_empresa(empresa_id: int, db: Session = Depends(get_db)):
    empresa = db.query(Empresa).filter(Empresa.id == empresa_id).first()
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa não encontrada")
    
    db.delete(empresa)
    db.commit()
    return {"detail": "Empresa deletada com sucesso"}
