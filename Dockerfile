FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
# RUN npm ci --only=production

RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

RUN npm ci --only=production

EXPOSE 80

CMD ["npm", "start"]