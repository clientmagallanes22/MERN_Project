# **MERN SETUP**

## I. Installation
Install the following programs
* Node.js
* Git
* Web Browser
* Visual Studio Code

    Install ff extensions:
    - Thunder Client
    - Auto Rename Tag
    - ES7+ React/Reduxe/React-Native snippets
    - Prettier
    - Tailwind CSS InterlliSense

## II. For backend
Open terminal and navigate to your project directory, and run the ff commands:
```sh
mkdir backend
cd backend
mkdir config
mkdir controllers
mkdir models
mkdir routes
npm init -y
npm install express
npm install nodemon
npm install mongoose
npm install cors
```
open packages.json and add:
`"type": "module",`
inside the 'scripts' replace with:
```javascript
"start": "node server.js",
"dev": "nodemon server.js"
```

## III. For frontend
Follow this [Video](https://www.youtube.com/watch?v=VAaUy_Moivw&t=597s&ab_channel=React%26NextjsProjectswithSahand)