FROM node:14.17 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY . ./
RUN npm install
RUN yarn build

FROM nginx
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]