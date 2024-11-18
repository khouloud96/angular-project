# Muteni-Bank

multi steps form.

## Getting started

To run the project locally, execute these commands:

```bash
cd muteni-bank
npm install
ng serve
```

## Versions

### Angular CLI: 18.2.12

- Node: 20.18.0
- Package Manager: npm 10.8.2
- OS: win32 x64

## Build and Run with docker compose

Open a terminal in angular-project, then run the following command to build and start the container:

```bash
docker-compose up --build
```

This command will:

- Build the Docker image for muteni-bank project.
- Start the container.
- The application will be available at http://localhost:4200 in your browser.

# Gestion de la Traduction avec ngx-translate dans Angular

Ce projet utilise la bibliothèque `ngx-translate` pour la gestion multilingue des interfaces utilisateur. `ngx-translate` permet de charger dynamiquement les traductions depuis des fichiers JSON et de basculer facilement entre plusieurs langues.

---

## Fonctionnalités

- **Support multilingue** : Traductions disponibles pour plusieurs langues.
- **Changement de langue à runtime** : Permet à l'utilisateur de changer la langue sans recharger l'application.
- **Chargement dynamique** : Les traductions sont chargées à la demande via des fichiers JSON.

---

## Installation

1. **Installer les dépendances nécessaires** :

   ```bash
   npm install @ngx-translate/core @ngx-translate/http-loader
   ```
