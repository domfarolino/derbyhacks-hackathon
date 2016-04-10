from peewee import *
import os
import datetime

# Create a database
from app.config import load_config

###
#Removed when moving away from sqlite
#cfg = load_config('api/config.yaml')
#print cfg['databases']
###
dynamicDB = MySQLDatabase("derbyhacks", host=os.getenv('IP'), user=os.getenv('C9_USER'), passwd="")


class DynamicModel (Model):
  class Meta:
    database = dynamicDB
  
######################################################
# DYNAMIC MODELS
######################################################

class University (DynamicModel):
    uni_id         = PrimaryKeyField()
    uni_name       = CharField()
    emailtag       = CharField(unique = True)
    

class User (DynamicModel):
    uid           = PrimaryKeyField()
    email         = CharField(unique = True)
    pwrd          = CharField(null = False)
    auth          = IntegerField(null = False)
    f_name        = CharField()
    l_name        = CharField()
    uni_id        = ForeignKeyField(University)

class Field (DynamicModel):
    field_id      = PrimaryKeyField()
    name          = CharField()
    uni_id        = ForeignKeyField(University)
    
class Course (DynamicModel):
    cid           = PrimaryKeyField()
    course_name   = CharField()
    field_id      = ForeignKeyField(Field)
    
class Professor_Course (DynamicModel):
    p_to_c_id     = PrimaryKeyField()
    cid           = ForeignKeyField(Course)
    uid           = ForeignKeyField(User)
    
class Question (DynamicModel):
    qid           = PrimaryKeyField()
    question      = TextField()
    date          = DateTimeField(default = datetime.datetime.now)
    uid           = ForeignKeyField(User)
    p_to_c        = ForeignKeyField(Professor_Course)
    
class Answer (DynamicModel):
    aid          = PrimaryKeyField()
    qid          = ForeignKeyField(Question)
    answer       = TextField()
    date         = DateTimeField(default = datetime.datetime.now)
    uid          = ForeignKeyField(User)
    approval     = BooleanField()