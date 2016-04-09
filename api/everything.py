######################################################
# IMPORTS
######################################################

# Import the models
from models_files import *

######################################################
app = Flask(__name__)


@app.route('/')
def hello():
    return send_from_directory('index.html', '/api/static/')

if __name__ == '__main__':
    app.run()