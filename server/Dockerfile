FROM node:carbon-alpine
RUN apk update && apk add curl
WORKDIR /app
RUN curl -o aws-iam-authenticator https://amazon-eks.s3-us-west-2.amazonaws.com/1.14.6/2019-08-22/bin/linux/amd64/aws-iam-authenticator
RUN chmod +x ./aws-iam-authenticator
RUN mv ./aws-iam-authenticator /usr/local/bin/aws-iam-authenticator
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "run", "start" ]
