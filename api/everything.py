######################################################
# IMPORTS
######################################################

# Import the models
#from model_files import *
from flask import Flask
######################################################
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

if __name__ == '__main__':
    app.run()