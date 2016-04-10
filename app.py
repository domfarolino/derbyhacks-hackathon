import os
from app import *
from app.config import load_config


# The path is relative to the top of the project.
cfg = load_config('app/config.yaml')

# Run with
# $ IP=0.0.0.0 PORT=8080 python run.py
# or similar
if os.getenv('IP'):
  IP = os.getenv('IP')
else:
  IP = '0.0.0.0'

if os.getenv('PORT'):
  PORT = 8081
  print PORT
else:
  PORT = 8081

print ("Running at http://{0}:{1}/".format(IP, PORT))


#app.secret_key = skt['secret_key']
app.tag = cfg['tag']

app.run(host = IP, port = PORT, debug = True, processes = 8)
