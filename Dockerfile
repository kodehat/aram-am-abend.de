FROM node:25.0.0-alpine3.21 AS builder

WORKDIR /app

COPY . /app/

RUN npm install && npm run build

FROM nginx:1.29.3-alpine

COPY nginx.conf /etc/nginx/conf.d/nginx-www-redirect.conf
COPY --from=builder /app/dist /usr/share/nginx/html