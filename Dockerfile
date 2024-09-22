FROM --platform=arm64 node:14

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start"]