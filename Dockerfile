# Etapa de build usando Bun
FROM oven/bun:1 AS builder
WORKDIR /app

# Copia package.json e o lockfile correto
COPY package.json bun.lock ./

# Instala dependências
RUN bun install --frozen-lockfile

# Copia o resto do projeto
COPY . .

# Build do Vite
RUN bun run build

# Etapa final com nginx
FROM nginx:alpine AS runner

# Remove configs padrão
RUN rm -rf /etc/nginx/conf.d/*

# Copia build gerado
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia config nginx customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
