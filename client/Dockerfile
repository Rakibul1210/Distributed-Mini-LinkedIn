FROM node:18-alpine

WORKDIR /linkedin/frontend

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]