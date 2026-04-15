FROM node:20-alpine

# Security update: Upgrade Alpine packages to address OpenSSL vulnerabilities
RUN apk upgrade --no-cache

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]