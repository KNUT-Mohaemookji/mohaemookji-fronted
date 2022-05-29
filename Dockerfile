# Main Container image
FROM alpine:edge

# build file loading
COPY . /usr/local/mohaemookji-frontend

# timezone setting and nodejs, npm install
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update nodejs \
    && apk add --update npm

# frontend library install and build
WORKDIR /usr/local/mohaemookji-frontend
RUN npm install

EXPOSE 8080
ENTRYPOINT ["npm", "run", "dev"]