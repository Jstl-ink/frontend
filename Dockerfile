FROM node:24-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG VITE_SHOWCASE_PAGE_HANDLE
ENV VITE_SHOWCASE_PAGE_HANDLE=$VITE_SHOWCASE_PAGE_HANDLE

RUN npm run build

FROM cgr.dev/chainguard/nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080