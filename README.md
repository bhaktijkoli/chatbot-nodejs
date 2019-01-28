# chatbot

## Project Setup

1. Install node packages.
  ```
  npm install
  ```
 2. Install nodemon globally.
  ```
   npm install nodemon -g
  ```
 3. Dublicate .env.example file to .env
 
 4. Dublicate config/config.json.example to config/config.json
 
 5. Enter your mysql database credentials in config.json
 
 6. Start the server.
  ```
  npm start
  ```

## Virtual Hosts Setup
1. Open /etc/hosts file with admin privileges
2. Add this lines at the end of the file
```
  127.0.0.1         chat.ai
  127.0.0.1         app.chat.ai
  127.0.0.1         apichat.ai
```
