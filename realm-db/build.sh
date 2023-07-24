#!/bin/bash
# Build the Docker image
docker build --build-arg MONGO_INITDB_ROOT_USERNAME=admin \
             --build-arg MONGO_INITDB_ROOT_PASSWORD=7e8xgf49 \
             --build-arg MONGO_INITDB_DATABASE=realm \
             --build-arg MONGO_INITDB_COLLECTION=cards \
             --build-arg MONGO_USERNAME=admin \
             --build-arg MONGO_PASSWORD=7e8xgf49 \
              -t realm-db .

