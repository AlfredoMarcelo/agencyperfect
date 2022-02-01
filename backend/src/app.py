from flask import Flask, render_template
from flask_migrate import Migrate
from flask_cors import CORS
from models import db

app = Flask(__name__)
app.url.map.stric_slashes = False
app.config['DEBUG'] = True
app.congfig['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['JWT_SECRET_KEY'] = '5c2bf15004e661d7b7c9394617143d07'
db.init_app(app)
Migrate(app, db)
CORS(app)

@app.route("/")
def index():
    return render_template("index.html")

if __name__== '__main__':
    app.run()