import os
# We need a bunch of Flask stuff
from flask import Flask

######################################################
# SETUP
######################################################
# Set up the Flask app

app = Flask(__name__)

from api.config import load_config
cfg = load_config('api/config.yaml')