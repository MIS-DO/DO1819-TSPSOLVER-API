FROM node:10.14-stretch-slim

RUN mkdir -p /opt/app

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV


# default to port 80 for node
ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /opt/app
COPY package.json package-lock.json* ./

RUN apt-get update -y
RUN apt-get install build-essential -y
RUN apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev -y
RUN apt install python-pip -y
RUN apt install python2.7 -y
RUN npm install -g node-gyp

RUN npm install && npm cache clean --force
COPY . /opt/app

CMD [ "npm","run", "start" ]