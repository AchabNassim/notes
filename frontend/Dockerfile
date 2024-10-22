FROM node:22

WORKDIR /app

COPY ./notesApp /app

RUN npm install && sleep 4

EXPOSE 80

CMD [ "npm", "run", "dev" ]