from flask_sqlalchemy import SQLAlchemy
import datetime

db=SQLAlchemy()


class User(db.Model):
    __tablename__="users"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100))
    lastname = db.Column(db.String(100))
    email = db.Column(db.String(100),unique=True)
    password = db.Column(db.String(200))
    rol_id = db.Column(db.Integer,db.ForeignKey("Rol.id"))
    comentary_id = db.Column(db.Integer,db.ForeignKey("Comentary.id"))


class Rol(db.Model):
    __tablename__="rols"
    id = db.Column(db.Integer,primary_key=True)
    rolname = db.Column(db.String(100))

class Project(db.Model):
    __tablename__="projects"
    id = db.Column(db.String,primary_key=True)
    projectname = db.Column(db.String(100))
    description = db.Column(db.String(250))
    date = db.Column(datetime.datetime.now())

class Category(db.Model):
    __tablename__="catergories"
    title = db.Column(db.String(100))
    project_id = db.Column(db.Integer, db.ForeignKey("Project.id"))

class Comentary(db.Model):
    __tablename__="comentaries"
    comment=db.Column(db.String(150))
    date = db.Column(datetime.datetime.now())



    

    