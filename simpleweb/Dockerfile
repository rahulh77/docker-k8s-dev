# Specify Base Image
FROM node:alpine

WORKDIR /app
# Install dependencies
COPY package.json .
RUN npm install
COPY . .

# Start command
CMD ["npm", "start"]