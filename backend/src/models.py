from flask_sqlalchemy import SQLAlchemy
import datetime

db=SQLAlchemy()


class User(db.Model):
    __tablename__="users"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100), nullable=False)#nullable=False obliga a rellenar el campo al usuario
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100),unique=True,nullable=False)
    password = db.Column(db.String(200),nullable=False)
    image = db.Column(db.String(5000))
    active = db.Column(db.Boolean, default=True)
    rol_id = db.Column(db.Integer,db.ForeignKey("rols.id"))
    comentary_id = db.Column(db.Integer,db.ForeignKey("comentaries.id"))
    projects = db.relationship('Project', cascade="all, delete", backref="user")
    rols = db.relationship("Rol", cascade="all, delete", secondary="rols_users")


    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "password": self.password,
            "image": self.image
        }

    def serialize_whit_project(self):
        return{
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "password": self.password,
            "image": self.image,
            "projects": self.get_projects(),
            "rols": self.get_rols()

        }
    
    def get_projects(self):
        return list(map(lambda project:project.serialize(), self.projects))

    def get_rols(self):
        return list(map(lambda rol:rol.serialize(), self.rols))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class RolUser(db.Model):
    __tablename__="rols_users"
    role_id = db.Column(db.Integer,db.ForeignKey("rols.id", ondelete="CASCADE"),primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id", ondelete="CASCADE"),primary_key=True)

    def save(self):
        db.session(self)
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
    users = db.relationship("User", cascade="all, delete", secondary="rols_users")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
    
    def serialize_whit_users(self):
        return {
            "id": self.id,
            "name": self.name,
            "users": self.get_users()
        }

    def get_users(self):
        return list(map(lambda user: {"id": user.id, "name": user.name}, self.users))

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
    id = db.Column(db.Integer,primary_key=True)
    project_name = db.Column(db.String(100))
    description = db.Column(db.Text)
    project_image= db.Column(db.String(5000))
    created_at = db.Column(db.DateTime,default=datetime.datetime.utcnow)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id", ondelete="CASCADE"))
    category_id = db.Column(db.Integer,db.ForeignKey("categories.id", ondelete="CASCADE"))
    comentaries = db.relationship("Comentary", backref="project")
    category = db.relationship("Category", backref="project", uselist=False)
    
    
    def serialize(self):
        return {
        "id": self.id,
        "project_name":self.project_name,
        "description": self.description,
        "project_image": self.project_image,
        "created_at": self.created_at,
        "category": self.category.serialize(),
        "user": self.user.serialize()
        }

    def serialize_whit_comentary(self):
        return{
            "id": self.id,
            "project_name": self.project_name,
            "description": self.description,
            "project_image": self.project_image,
            "created_at": self.created_at,
            "category": self.category.serialize(),
            "user":{
                "name":self.user.name,
                "lastname": self.user.lastname,
                "image": self.user.image,
                "email": self.user.email
            },
            "comentaries": self.get_comentaries()
        }

    def get_comentaries(self):
        return list(map(lambda comentary:comentary.serialize(),self.comentaries))


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
    id = db.Column(db.Integer,primary_key=True)
    title = db.Column(db.String(100))

    def serialize(self):
        return{
            "id": self.id,
            "title": self.title
        }

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

    def serialize(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "user_id": self.user_id,
            "project_id": self.project_id,
            "created_at": self.created_at
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()



    

    