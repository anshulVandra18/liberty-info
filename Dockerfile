### STAGE 1: Build ###
#FROM reg-harbor.agiletechnologies.in/agile_node16.14.2/node16.14.2:latest as builder
#COPY package*.json ./
#RUN npm install && mkdir /app-ui && mv ./node_modules ./app-ui
##RUN npm install -g npm-install-changed && mkdir /app-ui && mv ./node_modules ./app-ui
#RUN node --version
#WORKDIR /app-ui
###RUN npm install -g @angular/cli@9.1.0
#COPY . .
###RUN npm run build:stag
#RUN npm run build
 
### STAGE 2: Run ###
#FROM nginx:alpine
#RUN apk add apache2-utils
#COPY nginx-proxy.conf /etc/nginx/nginx.conf
#RUN rm -rf /usr/share/nginx/html/*
#COPY --from=builder /app-ui /usr/share/nginx/html/
#RUN rm -rf /usr/share/nginx/html/.git
#EXPOSE 80

FROM node:18.16.0-alpine
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install --force

COPY . .
COPY .env ./.env

RUN npm run build


CMD ["npm", "run", "start"]

EXPOSE 7231
