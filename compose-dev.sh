#!/usr/bin/bash

set -e
set -x

# This script will use docker-compose-dev.yml
# and pass command line arguments

docker-compose -f docker-compose-dev.yml $@