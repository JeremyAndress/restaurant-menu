FROM node:13.12.0-alpine 
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json ./
COPY yarn.lock ./
RUN npm i -g serve
RUN yarn --silent
COPY /public/ ./public
COPY /src/ ./src
RUN yarn build

CMD ["serve","-s", "build"]