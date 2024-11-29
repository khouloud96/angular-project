# Étape 1 : Build
FROM node:22.11-alpine AS build

# Installer les outils nécessaires pour les dépendances natives
RUN apk add --no-cache python3 make g++

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY muteni-bank/package.json muteni-bank/package-lock.json ./

# Configurer npm pour éviter les blocages
RUN npm config set registry https://registry.npmjs.org/
RUN npm install --verbose --unsafe-perm=true

# Copier le reste de l'application
COPY muteni-bank/ .

# Construire l'application Angular
RUN npm run build --prod

# Étape 2 : Serveur léger pour la production
FROM nginx:stable-alpine

# Copier les fichiers construits d'Angular dans le répertoire Nginx
COPY --from=build /app/dist/muteni-bank/browser /usr/share/nginx/html

# Copier le fichier de configuration Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 4200

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
