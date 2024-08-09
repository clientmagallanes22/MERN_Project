# **MERN SETUP**

1. Install:
 * Node.js
 * Visual Studio Code
 * Install ff extensions:
   1. Thunder Client
   2. Auto Rename Tag
   3. ES7+ React/Reduxe/React-Native snippets
   4. Prettier
   5. Tailwind CSS InterlliSense
* For backend
 * Open terminal and navigate to your project directory
  * Run ff commands:
   * mkdir backend
   * cd backend
   * mkdir config
   * mkdir controllers
   * mkdir models
   * mkdir routes
   * npm init -y
   * npm install express
   * npm install nodemon
   * npm install mongoose
   * npm install cors
  * open packages.json
   * add "type": "module",
  * inside the 'scripts' replace with:
   * "start": "node server.js",
   * "dev": "nodemon server.js"
* For frontend
 * Follow this [Video](https://www.youtube.com/watch?v=VAaUy_Moivw&t=597s&ab_channel=React%26NextjsProjectswithSahand)