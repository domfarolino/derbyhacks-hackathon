#Built in libraries import
import os, sys, importlib

#Import personally created files
from api.model_files.models import *
from api.config import *
from api.everything import *

# Retreive the db path from the 
conf = load_config('api/config.yaml')

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

# This uses Peewee to populate a table with all of the dynamic classes in config.yaml 
dynamicDB.create_tables(get_classes('dynamic'))

# Populate Chemical Table with dummy data.
berea = Univerisity (
  #We do not put in the primary id
  uni_name        = "Berea College",
  emailtag         = "berea"
  )
print "University Field Populated"
berea.save()

user1 = User(  
  email      = "eykrevooh",
  pwrd       = "password",
  auth       = 0,
  f_name     = "Kye",
  l_name     = "Hoover",
  uni_id     = berea.uni_id
  )
print "User table populated"
user1.save()

field1 = Field(
    uni_id     = berea.uni_id
    )
print "Field table populated"
field1.save()

build = Building(
  name       = "Science Building",
  num_floors = "4",
  address    = "101 Chestnut St.",
  )
print "Building table populated"
build.save()

room = Room(
  build_id   = build.build_id, #This makes the Building pID the value
  floor_id   = floor.floor_id,
  name       = "405",
  )
print "Room table populated"
room.save()

storage = Storage(
  room_id       = room.room_id,
  name          = "Flammable Cabinet",
  flammable     = True,
  health_hazard = False,
  oxidizer      = False,
  org_acid      = False,
  inorg_acid    = False,
  base          = False,
  peroxide      = False,
  pressure      = False,
  )
print "Storage table populated"
storage.save()

container = Container(
  barcode_id         = "16020032",
  chem_id            = chemical.chem_id,
  #res_u_name         = user.username,
  storage_id         = storage.storage_id,
  size_unit          = "ounces",
  size_quantity      = 12,
  con_type           = "bottle",
  manufacteror       = "Sigma Aldrich",
  con_size           = "ounces",
  con_quantity       = 24,
  )
print "Container table populated"
container.save()

history = History(
  storage_id    = storage.storage_id,
  #username      = user.username,
  size_unit     = "ounces",
  size_quantity = 18,
  )
print "History table populated"
history.save()