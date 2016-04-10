from models import *


def get_questions(p_to_c_id):
    questions = (Question.select()
    .where(Question.p_to_c_id == p_to_c_id))
    
    if questions.exists():
        return questions.get()
    else:
        return False
        
def add_questions(questtxt, qTitle, uid, p_to_c_id):
    question = Question(
    uid     = uid,
    qtitle      = qTitle,
    question    = questtxt,
    p_to_c   = p_to_c_id
    )
    try:
        question.save()
        return True
    except:
        return False

def get_questions_by_id(cid):
    questions = Question.select().join(Professor_Course).join(Course).where(Course.cid == cid)
    allquestions = []
    try:
        for question in questions:
            allquestions.append(model_to_dict(question))
        return allquestions
    except:
        # add failed queries
        return allquestions