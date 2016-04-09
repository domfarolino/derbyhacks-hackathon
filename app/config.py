import yaml, os

# For Logging
import logging
# The path is relative to the top of the project.

def load_config (file):
  print("GETCWD CONFIG.PY: " + os.getcwd())

  with open(file, 'r') as ymlfile:
    cfg = yaml.load(ymlfile)
  return cfg
