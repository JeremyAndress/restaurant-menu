FROM node:14.15.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json ./
COPY yarn.lock ./
# RUN npm i -g serve
RUN yarn --silent
COPY /public/ ./public
COPY /src/ ./src
RUN yarn build

FROM node:14.15.1-alpine
RUN mkdir -p /app/build
RUN npm i -g serve
COPY --from=build /app/build /app/build
WORKDIR /app
CMD ["serve","-s", "build"]