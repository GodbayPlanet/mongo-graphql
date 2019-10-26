#!/bin/bash

echo Re-creating and starting MongoDB container...
echo See file 'docker-compose-create-dev-db.yml' for details like DB name, port...

# Remove existing DB container and volumes
docker-compose -f docker-compose-create-dev-db.yml down -v
docker-compose -f docker-compose-create-dev-db.yml up -d

echo Docker container started
