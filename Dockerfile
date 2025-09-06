# myrepitfrontend/Dockerfile

# Шаг 1: Сборка
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Шаг 2: Сервер для отдачи статики
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Используем стандартный конфиг nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]