FROM node:18-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Build static assets
RUN npm run build && npm run export

FROM nginx:1.25.3-alpine-slim

# Copy static assets from builder stage
COPY --chown=nginx:nginx --from=builder /app/out /usr/share/nginx/html

RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d

RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 80