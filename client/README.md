# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint 
ors in the console.

# Para conectar o banco 
Instale o workbench 
Crie o banco de dados com suas respectivas colunas
Tipo de dados e nome do banco descrito a baixo na imagem.

![crudgames](https://user-images.githubusercontent.com/37938486/171411767-959a3dc7-9e40-4164-b90e-c2aa3fdefb84.png)

______________________________________________________________________________________________________________________________

# Como foi feito ?

## 1- Criar a organização das pastas (Client, Server)
então fica: 
## workspace / client
`npx create-react-app crud`
Depois de criado , dar um 
`yarn start ou npm start`

## 2- Dar uma limpada no projeto
Deletar os 4 arquivos que vem como padrão
app.test.js
logo.svg
reportWebVitals.js
setupTests.js
O index.css a única coisa que deixaremos é o 
`*{
padding: 0;
margin: 0;
}`
isso ficará global.

app.css limpar o arquivo deixar vazio

no index.js 
retirar o reportWevVitals

no app.js retirar a logo e a div
retirar os links quebrados em index.js e app.js da logo e do reportWevvitals

## workspace / server

`npm init`
`yarn add mysql express cors nodemon`
criar um arquivo
 index.js
declarar o express etc
`const express =require("express");
const app = express();`









