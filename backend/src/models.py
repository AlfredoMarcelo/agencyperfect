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


    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Rol(db.Model):
    __tablename__="rols"
    id = db.Column(db.Integer,primary_key=True)
    rolname = db.Column(db.String(100))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Project(db.Model):
    __tablename__="projects"
    id = db.Column(db.String,primary_key=True)
    projectname = db.Column(db.String(100))
    description = db.Column(db.String(250))
    date = db.Column(datetime.datetime.now())

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Category(db.Model):
    __tablename__="catergories"
    title = db.Column(db.String(100))
    project_id = db.Column(db.Integer, db.ForeignKey("Project.id"))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Comentary(db.Model):
    __tablename__="comentaries"
    comment=db.Column(db.String(150))
    date = db.Column(datetime.datetime.now())

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()



    

    