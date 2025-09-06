# Этап 1: Сборка приложения
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем зависимости первыми — для кэширования слоёв
COPY package*.json ./
RUN npm ci

# Копируем исходники
COPY . .

# Собираем приложение, игнорируя TS ошибки (если нужно)
# ⚠️ ВАЖНО: добавь "--ignore-ts-errors" только если используешь vue-tsc
# Или просто собирай через Vite, который по умолчанию не падает от TS ошибок
RUN npm run build

# Этап 2: Продакшен-образ с nginx
FROM nginx:alpine

# Копируем конфиг nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранное приложение
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]