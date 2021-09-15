FROM node:14-alpine as build

WORKDIR /home/node/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY src/ src/
COPY public/ public/

RUN npm build

FROM nginx:1-alpine

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/

COPY --from=build /home/node/app/build/ /usr/share/nginx/html/
