from flask_sqlalchemy import SQLAlchemy
import datetime

db=SQLAlchemy()

class RolUser(db.Model):
    __tablename__="rols_users"
    role_id = db.Column(db.Integer,db.ForeignKey("rols.id", ondelete="CASCADE"),primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey("rols.id", ondelete="CASCADE"),primary_key=True)


class User(db.Model):
    __tablename__="users"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100), nullable=False)#nullable=False obliga a rellenar el campo al usuario
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100),unique=True,nullable=False)
    password = db.Column(db.String(200),nullable=False)
    active = db.Column(db.Boolean, default=True)
    rol_id = db.Column(db.Integer,db.ForeignKey("rols.id"))
    comentary_id = db.Column(db.Integer,db.ForeignKey("comentaries.id"))
    project = db.relationship('Project', cascade="all, delete")


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
    name = db.Column(db.String(100),nullable=False, unique=True)
    users = db.relationship("User", cascade="all, delete",secondary="rols_users")
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
    description = db.Column(db.Text)
    created_at = db.Column(db.DateTime,default=datetime.datetime.utcnow)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id", ondelete="CASCADE"))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Category(db.Model):
    __tablename__="categories"
    id = db.Column(db.String,primary_key=True)
    title = db.Column(db.String(100))
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"))

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
    id = db.Column(db.Integer,primary_key=True)
    comment=db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id", ondelete="CASCADE"))
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id", ondelete="CASCADE"))
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()



    

    