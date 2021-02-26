FROM node:14.16

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

# add node_modules/.bin to path
ENV PATH /app/node_modules/.bin:$PATH

# Using volume mount with compose but lets make sure it works stand alone
COPY . .

ARG PORT=8080
ENV BACKEND_PORT $PORT

EXPOSE $BACKEND_PORT

CMD ["npm", "dev"]