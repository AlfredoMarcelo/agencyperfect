from flask_sqlalchemy import SQLAlchemy


db=SQLAlchemy()


class User(db.Model):
    __tablename__="users"
    id = db.Column(db.Integer,PrimaryKey=True)
    name = db.Column(db.String(100))
    

