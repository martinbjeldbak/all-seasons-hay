#! /bin/bash

# https://blog.docker.com/2014/08/orchestrating-docker-containers-in-production-using-fig/
git push
ssh mbm -t "cd /home/martin/all-seasons-hay; git pull ; sudo docker-compose build web && sudo docker-compose -f production.yml up -d --no-deps web"
