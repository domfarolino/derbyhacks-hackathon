from models import *
from university import *


def check_auth(in_email, password):
    authen = (User.select()
    .where((User.email == in_email) & (User.pwrd == password)))
    
    if authen.exists():
        return True
    else:
        return False

def register(in_email, password, fName, lName):
    def strip_unitag(input_email):
        unitag = input_email.split('@')[1]
        print unitag
        if "mail" in unitag:
            unitag = unitag.replace("mail.", "")
        print unitag
        return unitag
    user = User(
        email = in_email,
        pwrd = password,
        auth = 0,
        f_name = fName,
        l_name = lName,
        uni_id = get_uni_id(strip_unitag(in_email))
        )
    try:
        user.save()
        return True
    except:
        return False
        
