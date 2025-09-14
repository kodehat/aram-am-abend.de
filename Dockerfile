FROM node:24.8.0-alpine3.21 AS builder

WORKDIR /app

COPY . /app/

RUN npm install && npm run build

FROM nginx:1.29.1-alpine

COPY --from=builder /app/dist /usr/share/nginx/html