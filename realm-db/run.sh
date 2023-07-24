#!/bin/bash
# Used to run only the database

# Stop previous container
containerId=$(docker ps | grep realm-db | awk '{print $1}')
docker stop $containerId

docker rm realm-db

# Get the current working directory (where the run.sh script is located)
CURRENT_DIR=$(pwd)

# Load environment variables from .env file
if [[ -f ../.env ]]; then
  export $(cat ../.env | grep -v '#' | awk '/=/ {print $1}')
fi

echo Realm-db run on port: $DATABASE_PORT

docker run -d -p 7600:27017 \
  --name realm-db \
  -e MONGO_INITDB_ROOT_USERNAME="$MONGO_INITDB_ROOT_USERNAME" \
  -e MONGO_INITDB_ROOT_PASSWORD="$MONGO_INITDB_ROOT_PASSWORD" \
  -e MONGO_INITDB_DATABASE="$MONGO_INITDB_DATABASE" \
  -e DATABASE_URI="$DATABASE_URI" \
    mongo
