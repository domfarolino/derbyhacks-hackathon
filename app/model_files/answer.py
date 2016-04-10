from models import *

def get_answers(qid):
    answers = (Answer.select()
    .join(Question)
    .where(Question.qid == qid))
    allanswers = []
    if answers.exists():
        for answer in answers:
            allanswers.append(model_to_dict(answer))
        return allanswers
    else:
        return allanswers
        
def add_answer(answertxt, qid, uid):
    answer = Answer(
    qid        = qid,
    answer     = answertxt,
    uid        = uid
    )
    try:
        answer.save()
        return True
    except:
         # log failing queries here
        return False