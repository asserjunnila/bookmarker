#!/bin/bash

# # set exit immediately after errors
# set -e

# # print commands and arguments
# set -x

# # all assignments arguments are palced in the environment
# set -k

# # mark variables which are modified or created for export
# set -a

# # Script to initiate production optimized versions of each image

if git diff-index --quiet HEAD --; then
  # GITCOMMIT=$(git log --pretty=format:'%h' -n 1)
  echo "Building prod versions from ${GITCOMMIT}\n"

  # echo "Sourcing .env-prod\n"
  # source .env-prod

  ./prod.sh build $@
else
  echo "Working tree contains changes"
fi

# GITCOMMIT=$(git log --pretty=format:'%h' -n 1)
#echo "Building prod versions from ${GITCOMMIT}\n"

# echo "Sourcing .env-prod\n"
# source .env-prod

#./prod.sh build $@