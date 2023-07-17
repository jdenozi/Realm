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

echo "DATABASE_URI: $DATABASE_URI"
echo "USERNAME: $USERNAME"
echo "PASSWORD: $PASSWORD"

# Run the Docker container
docker run -d -p 7600:27017 \
  --name realm-db \
  -e MONGO_INITDB_ROOT_USERNAME="$MONGO_INITDB_ROOT_USERNAME" \
  -e MONGO_INITDB_ROOT_PASSWORD="$MONGO_INITDB_ROOT_PASSWORD" \
  -e MONGO_INITDB_DATABASE="$MONGO_INITDB_DATABASE" \
  -e DATABASE_URI="$DATABASE_URI" \
  -v "$CURRENT_DIR/cards":/data/cards \
    mongo

echo "Import card database"
docker exec realm-db mongoimport -d realm -c cards --file data/cards/cards.json --jsonArray
