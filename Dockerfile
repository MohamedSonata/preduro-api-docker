# path: ./Dockerfile.prod
# path: ./Dockerfile.prod
#!/bin/sh
# path: ./Dockerfile

FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add  build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
# RUN chmod +x /usr/local/bin/docker-entrypoint.sh
# ENTRYPOINT ["/app/docker-entrypoint.sh"]
WORKDIR /opt/app
COPY ./ .
RUN yarn build
ENTRYPOINT ["docker-entrypoint.sh"]
EXPOSE 1337
CMD ["yarn", "start"]
