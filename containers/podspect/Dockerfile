# base image
FROM node:alpine

WORKDIR /workdir

COPY package.json /workdir/package.json
COPY package-lock.json /workdir/package-lock.json

RUN npm install

COPY . /workdir

# Sets up env var
# ENV PORT=8000

CMD [ "node", "src" ]
