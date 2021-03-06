#!/bin/bash

# set -e
# set -x
# set -k
# set -a
# GITCOMMIT=$(git log --pretty=format:'%h' -n 1)

# source .env-prod

# docker-compose -f docker-compose-prod.yml up --no-build $@

./prod.sh up --no-build $@