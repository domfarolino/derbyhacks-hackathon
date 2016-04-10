#Built in libraries import
import os, sys, importlib

#Import personally created files
from app.model_files.models import *
from app.config import *
from app.everything import *

# Retreive the db path from the 
conf = load_config('app/config.yaml')

# Drops all Values in the tables
def drop_tables(table_lst):
  for table in table_lst:
    try:
      table.drop_table(True, True)
      print str(table) + " was dropped"
    except:
      print str(table) + " does not exist"
      
  

#Retreives all the class's from the module_name and returns them
def class_from_name (module_name, class_name):
    """Reads all class names from """
    # load the module, will raise ImportError if module cannot be loaded
    # m = __import__(module_name, globals(), locals(), class_name)
    # get the class, will raise AttributeError if class cannot be found
    c = getattr(module_name, class_name)
    return c

def get_classes (db):
  classes = []
  for str in conf['models'][db]:
    print ("\tRetreiveing Model for '{0}'".format(str))
    c = class_from_name(sys.modules[__name__], str)
    classes.append(c)
  return classes

# This empties the database tables
class_lst = conf["models"]["dynamic"]
drop_tables(get_classes("dynamic"))
print "It passed here"

# This uses Peewee to populate a table with all of the dynamic classes in config.yaml 
dynamicDB.create_tables(get_classes('dynamic'), safe=True)

# Populate Chemical Table with dummy data.
berea = University (
  #We do not put in the primary id
  uni_name        = "Berea College",
  emailtag         = "berea"
  )
  
print "University Field Populated"
berea.save()

user1 = User(  
  email      = "eykrevooh@berea.edu",
  pwrd       = "password",
  auth       = 0,
  f_name     = "Kye",
  l_name     = "Hoover",
  uni_id     = berea.uni_id
  )
print "User table populated"
user1.save()

prof1 = User(
  email      = "jadudm@berea.edu",
  pwrd       = "password",
  auth       = 2,
  f_name     = "Matt",
  l_name     = "Jadud",
  uni_id     = berea.uni_id
  )

field1 = Field(
    name       = "Computer Science",
    uni_id     = berea.uni_id
    )
print "Field table populated"
field1.save()

course1 = Course(
    course_name = "CSC 226",
    field_id    = field1.field_id
    )
print "Course table populated"
course1.save()

p_2_c1 = Professor_Course(
    cid        = course1.cid,
    uid        = prof1.uid
    )
print "Professor Mapping Made"
p_2_c1.save()

question1 = Question(
    question   = "Why is the sky blue?",
    uid        = user1.uid,
    p_to_c     = p_2_c1.p_to_c_id
    )
print "Question was populated"
question1.save()

answer1 = Answer(
    qid        = question1.qid,
    answer     = "Because you worship Satan",
    uid        = prof1.uid,
    approval   = True
    )
print "The Answer was saved"
answer1.save()