import os

# We need a bunch of Flask stuff
from flask import Flask
from flask import render_template
from flask import redirect
from flask import request
from flask import json
from flask import url_for
from flask import g
from flask import session
from flask import jsonify
from flask import send_from_directory
from flask.ext.login import LoginManager

# Some Local Stuff we made
from model_files.models import *

######################################################
# SETUP
######################################################
# Set up the Flask app

app = Flask(__name__, static_url_path='/static')

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'user_login'


from app.config import load_config
cfg = load_config('app/config.yaml')