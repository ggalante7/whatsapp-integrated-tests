FROM node

RUN cd /app && npm install

CMD [ "node", "/app/index.js" ]

EXPOSE 3000