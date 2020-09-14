FROM node:10.21-alpine3.9 as dev

WORKDIR /usr/src/fe

COPY package*.json ./

RUN npm install --silent

COPY . .

### build
FROM dev as build

RUN npm run build

#### prod
FROM nginx:stable-alpine
COPY --from=build /usr/src/fe/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
