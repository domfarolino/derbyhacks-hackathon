from everything import *

@app.route("/", methods = ["GET"])
def main ():
    this = some_function()
    return render_template ("index.html")
    
