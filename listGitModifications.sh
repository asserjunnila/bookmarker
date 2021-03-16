#!/bin/bash

# This will output a table with sorted author by their contributions
if [[ -z $1 ]]
then
  echo "Please provide path for frontend or backend"
  exit 1;
fi;

# this command chain will produce output of authors by their contribution amounts
git ls-files $1 | xargs -n1 git blame --line-porcelain | sed -n 's/^author //p' | sort -f | uniq -ic | sort -nr
