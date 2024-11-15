# Étape 1 : Construire l'application
FROM node:18 AS build
WORKDIR /app

RUN npm install -g @angular/cli

COPY muteni-bank/ .

# Étape 2 : Servir avec ng serve
CMD ["ng", "serve", "--host", "0.0.0.0"]
