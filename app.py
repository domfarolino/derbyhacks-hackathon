import os
from api import app

# Builds the server configuration
if os.getenv('IP'):
  IP = os.getenv('IP')
else:
  IP = '0.0.0.0'

if os.getenv('PORT'):
  PORT = int(os.getenv('PORT'))
else:
  PORT = 8080

# Print statements go to your log file in production; to your console while developing
print ("Running server at http://{0}:{1}/".format(IP, PORT))
app.run(host = IP, port = PORT, debug = True, threaded = True)