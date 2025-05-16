from sqlalchemy import create_engine
from models import Base

engine = create_engine('sqlite:///matakuliah.db')
Base.metadata.create_all(engine)
print("Database dan tabel Matakuliah berhasil dibuat.")