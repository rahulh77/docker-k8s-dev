FROM node:alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install -f
COPY . .
RUN npm run build


FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html