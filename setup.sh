#!/bin/bash

# docker image build from docker file
docker build --tag 2mukee/mh-frontend

# push to dockerhub
docker push 2mukee/mh-frontend

# docker stack init
docker stack deploy -c /var/lib/jenkins/workspace/mohaemookji-frontend/mh-compose.yml mh-frontend