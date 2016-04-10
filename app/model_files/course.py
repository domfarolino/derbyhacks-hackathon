from models import *

def get_course(field_id):
    courses = (Course.select().join(Field).where(Field.field_id == field_id))
    allCourses = []
    for course in courses:
        allCourses.append(model_to_dict(course))
    return allCourses
