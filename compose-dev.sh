#!/usr/bin/bash

# set exit immediately after errors
set -e

# print commands and arguments
set -x

# all assignments arguments are palced in the environment
set -k

# mark variables which are modified or created for export
set -a

# This script will use docker-compose-dev.yml
# and pass command line arguments

# lets source the .env-dev file as basis
source .env-dev

docker-compose -f docker-compose-dev.yml $@