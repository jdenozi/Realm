FROM node:14-alpine
LABEL authors="juliend@innopsys.lan"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
