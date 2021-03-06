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
    role_id = db.Column(db.Integer,db.ForeignKey("roles.id"))
    projects = db.relationship('Project', cascade="all, delete", backref="user")
    

    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "image": self.image,
            "role_id":self.role_id
        }

    def serialize_whit_project(self):
        return{
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "image": self.image,
            "projects": self.get_projects()

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

class Role(db.Model):
    __tablename__="roles"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100),nullable=False, unique=True)
    users = db.relationship("User", cascade="all, delete", backref="role")




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
    comentaries = db.relationship("Comentary", backref="project")
    
    
    def serialize(self):
        return {
        "id": self.id,
        "project_name":self.project_name,
        "description": self.description,
        "project_image": self.project_image,
        "created_at": self.created_at,
        "user_id": self.user_id,
        "user":self.user.serialize() 
        }

    def serialize_whit_comentary(self):
        return{
            "id": self.id,
            "project_name": self.project_name,
            "description": self.description,
            "project_image": self.project_image,
            "created_at": self.created_at,
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



    

    