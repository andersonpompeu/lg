# ---- STAGE 1: Build do projeto ----
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- STAGE 2: Servir com Nginx ----
FROM nginx:alpine

# Remove configuração padrão
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos buildados para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia nova config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
