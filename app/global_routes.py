from everything import *
from flask import jsonify
from model_files import *

@app.route("/", methods = ["GET"])
def main ():
    return render_template ("index.html")
        
@app.route('/node_modules/<path:path>')
def node_modules_static(path):
    return app.send_static_file(path)
    
@app.route('/src/<path:path>')
def src_static(path):
    return app.send_static_file(path)
    

@app.route("/api/authUser", methods = ["POST", "GET"])
def authUser ():
    if request.method == "POST":
        user = request.get_json()
        authenticated = check_auth(user['email'], user['password'])
        print request.environ
        if authenticated:
            return jsonify(authenticated="True")
        else:
            return jsonify(authenticated="False")

@app.route("/api/register", methods = ["POST"])
def registration ():
    user = request.get_json()
    registered = register(user['email'], user['password'], user['firstname'], user['lastname'])
    print request.environ
    if registered:
        return jsonify(registered="True")
    else:
        return jsonify(registered="False")

@app.route("/api/fields", methods = ["GET"])
def fields():
    uid = 71
    allfield = get_fields(uid)
    return json.dumps(allfield)

@app.route("/api/courses", methods = ["GET"])
def course_lst ():
    if request.method == "GET":
        field = request.args.get("field_id")
        courses = get_course(field)
        return json.dumps(courses)

@app.route("/api/questions", methods = ["GET", "POST"])
def questions_lst ():
    if request.method == "GET":
        course = request.args.get("cid")
        questions = get_questions_by_id(course)
        return json.dumps(questions)
    if request.method == "POST":
        question = request.get_json()
        added = add_questions(question["question"], question["questionTitle"], question["uid"], question["p_to_c_id"])
        return jsonify(success=added)
        
@app.route("/api/answers", methods = ["GET", "POST"])
def answer_lst ():
    if request.method == "GET":
        quest_id = request.args.get("qid")
        print quest_id
        answers = get_answers(quest_id)
        return json.dumps(answers)
    if request.method == "POST":
        # Need to build
        answer = request.get_json()
        added = add_answer(answer["answer"], answer["qid"], answer["uid"], )
        return jsonify(success=added)
        

 #Everything must come before this
 #Below, is the 'last-result' deep linking query param(s) that will
 #be sent to the front end

    
@app.route('/<path:path>')
def url(path):
    return render_template ("index.html")
