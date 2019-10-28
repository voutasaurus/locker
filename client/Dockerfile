FROM node:carbon-alpine
WORKDIR /app
COPY . .
RUN npm run build
ENTRYPOINT [ "npm", "start" ]
