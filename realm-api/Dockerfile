FROM node:14-alpine
LABEL authors="juliend@outlook.lan"

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]