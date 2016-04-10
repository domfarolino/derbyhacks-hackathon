from models import *

def get_uni_id(emailtag):
    uni_tag = (University.select(University.uni_id)
    .where(University.emailtag == emailtag))
    
    if uni_tag.exists():
        return (uni_tag.get()).uni_id
    else:
        return False
        

        