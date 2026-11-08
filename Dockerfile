# Ecosystem HR Suite · servidor de conexión de una empresa
# © 2026 THE CEREBRO CREATIVE. Todos los derechos reservados.
FROM node:22-alpine
WORKDIR /app
COPY server.js ./
COPY public ./public
# Clave pública de THE CEREBRO CREATIVE para comprobar las licencias
COPY clave-publica-licencias.tx[t] license-public.pe[m] ./
ENV NODE_ENV=production DATA_DIR=/var/data TRUST_PROXY=1
EXPOSE 10000
CMD ["node", "server.js"]
