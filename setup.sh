# Source this.
# Setup virtualenv
mkdir -p data

if [ ! -d venv ]
then
  virtualenv venv
fi

. venv/bin/activate

pip install Flask
pip install peewee
pip install pyyaml

mysql-ctl start

