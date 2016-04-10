from models import *

def get_prof_course(courseid):
    professor = (Professor_Course().select()
    .join(Course, on = (Professor_Course.cid_id == Course.cid))
    .join(User, on = (Professor_Course.uid_id == User.uid))
    .where(Professor_Course.cid_id == courseid))
    
    try:
        return professors.get()
    except:
        return False
        
def get_field_profs(fieldid):
    professors
