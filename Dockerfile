FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm install --omit=dev
COPY . .
ENV HOST=0.0.0.0 PORT=8080
EXPOSE 8080
CMD ["node", "app.js"]
