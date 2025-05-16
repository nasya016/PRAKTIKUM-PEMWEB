from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.view import view_config
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from models import Base, Matakuliah
import json

# Setup DB
engine = create_engine('sqlite:///matakuliah.db')
DBSession = scoped_session(sessionmaker(bind=engine))

# GET semua matakuliah
@view_config(route_name='matakuliah_list', renderer='json', request_method='GET')
def get_all_matakuliah(request):
    session = DBSession()
    data = session.query(Matakuliah).all()
    return [{'id': mk.id, 'kode_mk': mk.kode_mk, 'nama_mk': mk.nama_mk, 'sks': mk.sks, 'semester': mk.semester} for mk in data]

# POST tambah matakuliah
@view_config(route_name='matakuliah_create', renderer='json', request_method='POST')
def create_matakuliah(request):
    session = DBSession()
    data = request.json_body
    mk = Matakuliah(
        kode_mk=data['kode_mk'],
        nama_mk=data['nama_mk'],
        sks=data['sks'],
        semester=data['semester']
    )
    session.add(mk)
    session.commit()
    return {'message': 'Matakuliah berhasil ditambahkan', 'id': mk.id}

# PUT update matakuliah
@view_config(route_name='matakuliah_update', renderer='json', request_method='PUT')
def update_matakuliah(request):
    session = DBSession()
    mk_id = int(request.matchdict['id'])
    mk = session.query(Matakuliah).get(mk_id)
    if not mk:
        return Response(json.dumps({'error': 'Matakuliah tidak ditemukan'}), status=404, content_type='application/json')
    data = request.json_body
    mk.kode_mk = data.get('kode_mk', mk.kode_mk)
    mk.nama_mk = data.get('nama_mk', mk.nama_mk)
    mk.sks = data.get('sks', mk.sks)
    mk.semester = data.get('semester', mk.semester)
    session.commit()
    return {'message': 'Matakuliah berhasil diperbarui'}

# DELETE matakuliah
@view_config(route_name='matakuliah_delete', renderer='json', request_method='DELETE')
def delete_matakuliah(request):
    session = DBSession()
    mk_id = int(request.matchdict['id'])
    mk = session.query(Matakuliah).get(mk_id)
    if not mk:
        return Response(json.dumps({'error': 'Matakuliah tidak ditemukan'}), status=404, content_type='application/json')
    session.delete(mk)
    session.commit()
    return {'message': 'Matakuliah berhasil dihapus'}

# Konfigurasi app
if __name__ == '__main__':
    with Configurator() as config:
        config.include('pyramid_tm')
        config.add_route('matakuliah_list', '/matakuliah')             # GET
        config.add_route('matakuliah_create', '/matakuliah/create')    # POST
        config.add_route('matakuliah_update', '/matakuliah/{id}')      # PUT
        config.add_route('matakuliah_delete', '/matakuliah/delete/{id}')      # DELETE 
        config.scan()
        app = config.make_wsgi_app()

    from waitress import serve
    print("🔥 Server aktif di http://localhost:6543")
    serve(app, host='0.0.0.0', port=6543)