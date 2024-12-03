# Muteni-Bank

This project simplifies and automates the process of generating and validating an honor declaration for beneficiaries. It aims to provide an intuitive and efficient solution to collect the necessary information and guide the user through the different steps of the form.

And that, through a multi-step form in Angular, with language management and local data storage.

## Technological Stack

- Frontend: Angular, Bootstrap
- Language: TypeScript
- Translations: ngx-translate
- Backup Locale: LocalStorage (with Angular service)

  <img width="50%" alt="stack technologique" src="https://github.com/khouloud96/angular-project/blob/master/muteni-bank/src/assets/images/stack%20technologique.png">

## Project Architecture

  <img width="100%" alt="Architecture" src="https://github.com/khouloud96/angular-project/blob/master/muteni-bank/src/assets/images/architecture.png">

## Versions

### Angular CLI: 18.2.12

- Node: 20.18.0
- Package Manager: npm 10.8.2
- OS: win32 x64

## Getting started

To run the project locally, execute these commands:

```bash
cd muteni-bank
npm install
ng serve
```

## Build and Run with docker compose

Open a terminal in angular-project, then run the following command to build and start the container:

```bash
docker-compose up --build
```

This command will:

- Build the Docker image for muteni-bank project.
- Start the container.
- The application will be available at http://localhost:4200 in your browser.

# Translation Management with ngx-translate in Angular

This project uses the `ngx-translate` library to handle multilingual user interfaces. `ngx-translate` allows you to dynamically load translations from JSON files and easily switch between multiple languages.

---

## Installation

1. **Install the required dependencies**:

   ```bash
   npm install @ngx-translate/core @ngx-translate/http-loader
   ```

---

## Features

- **Multilingual support**: Translations are available for multiple languages.
- **Runtime language switching**: Users can change the language without reloading the application.
- **Dynamic loading**: Translations are loaded on demand from JSON files.

# Data management with a LocalStorage service

This project uses `LocalStorage` service to manage the data of a multi-step form in Angular in order to automatically save, load, and clear the data of a Reactive form.

---

## Features

- Automatically save the step data to avoid losing it in case the page is reloaded.
- Load this data at startup to allow the user to pick up where they left off.
- Clean the data after form submission to avoid cluttering the LocalStorage.

# Project ScreenShot

### Form Introduction

<img width="80%" alt="Form Introduction" src="https://github.com/khouloud96/angular-project/blob/master/muteni-bank/src/assets/images/form%20introduction.PNG">

### Modal Accept Conditions

<img width="80%" alt="Modal Accept Conditions" src="https://github.com/khouloud96/angular-project/blob/master/muteni-bank/src/assets/images/modal%20accept%20conditions.PNG">

### Step 1 : The deceased Information

<img width="80%" alt="The deceased Information" src="https://github.com/khouloud96/angular-project/blob/master/muteni-bank/src/assets/images/step1.PNG">

### Step 2 : Beneficiary information

<img width="80%" alt="Beneficiary information" src="https://github.com/khouloud96/angular-project/blob/master/muteni-bank/src/assets/images/step2.PNG">

### Step 3 : Tax Situation

<img width="80%" alt="Tax Situation" src="https://github.com/khouloud96/angular-project/blob/master/muteni-bank/src/assets/images/step3.PNG">

### Step 4 : Summary

<img width="80%" alt="Summary" src="https://github.com/khouloud96/angular-project/blob/master/muteni-bank/src/assets/images/summary.PNG">

## Confirmation Form Submit

<img width="80%" alt="Confirmation Form Submit" src="https://github.com/khouloud96/angular-project/blob/master/muteni-bank/src/assets/images/form%20confirm.PNG">
