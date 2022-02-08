from flask import Flask, jsonify, render_template,request
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from itsdangerous import json
from models import db,User,Project,Rol,RolUser,Comentary

app = Flask(__name__)

app.url_map.strict_slashes = False
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['JWT_SECRET_KEY'] = '5c2bf15004e661d7b7c9394617143d07'
db.init_app(app)
Migrate(app, db)
CORS(app)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/api/register', methods=['POST'])
def register():
    if request.method == 'POST':

        name = request.json.get("name")
        lastname = request.json.get("lastname")
        email = request.json.get("email")
        password = request.json.get("password")
        image = request.json.get("image","")

        if not email: return jsonify({"msg":"Debe ingresar un email para registrarse"}), 400
        user = User.query.filter_by(email=email).first()
        if user: return jsonify({"msg":"El email ya está en uso"}),400

        user = User()
        user.name = name
        user.lastname = lastname
        user.email = email
        user.password = password
        user.image = image
        user.save()
        return jsonify({"mensaje":"Se ha completado el registro con exito"}),200

@app.route('/api/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.json.get("email")
        password = request.json.get("password")

        if not email: return jsonify({"email": "El email es requerido"}), 422
        if not password: return jsonify({"password": "El password es requerido"}), 422

@app.route('/api/update/<int:id>', methods=['PUT'])
def update_user(id):
    name = request.json.get("name")
    lastname = request.json.get("lastname")
    email = request.json.get("email")
    password = request.json.get("password")
    image = request.json.get("image","")

    user = User.query.get(id)
    user.name = name
    user.lastname = lastname
    user.email = email
    user.password = password
    user.image = image
    user.update()

    return jsonify(user.serialize()), 200

@app.route('/api/delete/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    user.delete()
    
    return jsonify({"msg":"El usuario ha sido eliminado satisfactoriamente"})


@app.route('/api/users_all', methods=['GET'])
def all_users():
    users = User.query.all()
    users = list(map(lambda user:user.serialize_whit_project(),users))
    return jsonify(users),200


@app.route('/api/projects/all', methods=['GET'])
def all_projects():
    projects = Project.query.all()
    projects = list(map(lambda project:project.serialize_whit_comentary(),projects))
    return jsonify(projects), 200



@app.route("/api/user/<int:user_id>/projects", methods=['GET', 'POST'])
@app.route("/api/user/<int:user_id>/projects/<int:project_id>", methods=['GET', 'PUT', 'DELETE'])
def contacts_by_user(user_id, project_id = None):
    if request.method == 'GET':
        if project_id is not None:
            project = Project.query.filter_by(user_id=user_id, id=project_id).first()
            if not project: return jsonify({"msg": "Project no encontrado"}), 404
            return jsonify(project.serialize_whit_comentary()), 200
        else:
            projects = Project.query.filter_by(user_id=user_id)
            projects = list(map(lambda project: project.serialize(), projects))
            return jsonify(projects), 200

    if request.method == 'POST':

        project_name = request.json.get("project_name")
        description = request.json.get("description")
        project_image = request.json.get("project_image")

        project = Project()
        project.project_name = project_name
        project.description = description
        project.project_image = project_image
        project.save()
        return jsonify({"mensaje":"El project fue creado con exito"})

    if request.method == 'PUT':
        project_name = request.json.get("project_name")
        description = request.json.get("description")
        project_image = request.json.get("project_image")


        project = Project.query.filter_by(user_id=user_id, id=project_id).first()
        if not project: return jsonify({"msg": "Contact not found!"}), 404

        project.project_name = project_name
        project.description = description
        project.project_image = project_image
        project.update()
        

        return jsonify(project.serialize()), 200
    
    if request.method == 'DELETE':
        project = Project.query.filter_by(user_id=user_id, id=project_id).first()
        project.delete()

        return jsonify({"msg":"El proyecto fue eliminado con exito"})




@app.route('/api/comentaries/create', methods=['GET','POST'])
def create_comentaries():
    if request.method == "POST":
        comment = request.json.get("comment")
        
        comentary = Comentary()
        comentary.comment = comment
        comentary.save()
        return jsonify(comentary.serialize()), 201
    if request.method == "GET":
        comentaries = Comentary.query.all()
        comentaries = list(map(lambda comment:comment.serialize(),comentaries))
        return jsonify(comentaries), 200

if __name__== '__main__':
    app.run()