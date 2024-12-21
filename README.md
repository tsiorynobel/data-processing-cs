# DATA PROCESSING FRONTEND

## Description

**DATA PROCESSING FRONTEND** est une application de visualisation de données financières réalisée avec **React**. Elle permet d'afficher les trades effectués sur **Bitmex** sous forme de tableau, filtrables par dates.  
L'application propose des statistiques telles que la moyenne, la médiane, le minimum, le maximum et la rentabilité des transactions. Les données sont récupérées via l'API de Bitmex et affichées pour aider à mieux comprendre les performances des trades.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé ou configuré les éléments suivants :  

- **Node.js** (version 22.12.0 ou supérieure)  
- **npm** (gestionnaire de paquets Node.js)  
- **SQLite** (version 3)  
- Modules requis : `express`, `axios`, `sequelize`, `sqlite3`, `dotenv`  
- Une connexion Internet stable  
- Un éditeur de code (par exemple, VS Code ou PyCharm)  
- **Postman** (ou un outil équivalent) pour tester les requêtes API  

---

## Fonctionnalités

- Affichage des données liées aux trades Bitmex sous forme de tableau.  
- Visualisation des statistiques financières comme :  
  - Moyenne  
  - Médiane  
  - Valeurs minimales et maximales  
  - Rentabilité des transactions  
- Filtrage des données par symbole et par dates.  

---

## Installation

### Backend : `dataProcessing-ss`

1. Clonez le dépôt **dataProcessing-ss** sur votre machine locale :  
   ```bash
   git clone git@github.com:tsiorynobel/dataProcessingBackEnd.git
   cd dataProcessingBackEnd
   ```

2. Installez les dépendances nécessaires :  
   ```bash
   npm install
   ```

3. Configurez la base de données SQLite :  
   ```bash
   npm install sequelize sqlite3 dotenv
   ```

4. Lancez le serveur backend :  
   ```bash
   node server.js
   ```

---

### Frontend : `dataProcessingBitMex-cs`

1. Clonez le dépôt **dataProcessingBitMex-cs** sur votre machine locale :  
   ```bash
   git clone git@github.com:tsiorynobel/dataProcessingBitMex-cs.git
   cd dataProcessingBitMex-cs
   ```

2. Installez les dépendances nécessaires :  
   ```bash
   npm install
   ```

3. Démarrez l'application frontend :  
   ```bash
   npm start
   ```

---

## Notes supplémentaires

- Assurez-vous que le backend est démarré avant de lancer le frontend pour garantir une connexion fluide entre les deux.  
- Utilisez **Postman** ou un équivalent pour tester les requêtes API et valider les fonctionnalités.  

---
