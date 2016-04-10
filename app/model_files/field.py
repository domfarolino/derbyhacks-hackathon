from models import *

def get_fields(uid):
    fields = Field.select().join(University).where(University.uni_id == uid)
    allfields = []
    try:
        for field in fields:
            allfields.append(model_to_dict(field))
        return allfields
    except:
        # lof fail queries here
        return allfields