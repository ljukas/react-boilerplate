# Base image
FROM node:9.11-alpine

WORKDIR /app

# webpack-dev-server installed for dev purposes.
RUN npm install -g webpack-dev-server

COPY package*.json ./
RUN npm install
RUN mv /app/node_modules /node_modules

COPY . /app

CMD ["npm", "build"]
