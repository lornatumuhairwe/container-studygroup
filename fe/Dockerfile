FROM node:10.21-alpine3.9 as dev

WORKDIR /usr/src/fe

COPY package*.json ./

RUN npm install --silent

COPY . .
# ENV CI=true
### build
FROM dev as build
ENV REACT_APP_API_PATH=http://wapi-service:4000 REACT_APP_VERSION=v2
RUN npm run build

#### prod
FROM nginx:stable-alpine
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /usr/src/fe/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
# CMD ["npm", "start"]
