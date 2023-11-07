FROM node:18.3.0-alpine3.14
WORKDIR /usr/app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]

