FROM node:22

WORKDIR /api

COPY ./api/ /api

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "server" ]