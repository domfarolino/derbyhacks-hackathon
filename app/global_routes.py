from everything import *

@app.route("/", methods = ["GET"])
def main ():
    return render_template ("index.html")
    
@app.route('/node_modules/<path:path>')
def node_modules_static(path):
    return app.send_static_file(path)
    
@app.route('/src/<path:path>')
def src_static(path):
    return app.send_static_file(path)
    
@app.route('/<path:path>')
def url(path):
    return render_template ("index.html")