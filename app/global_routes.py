from everything import *

@app.route("/test", methods = ["GET"])
def main ():
    return render_template ("test.html")
    
