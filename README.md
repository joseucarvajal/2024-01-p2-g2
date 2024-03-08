*Nota:* Este documento no contiene tildes por limitaciones del teclado en ingles

# Paso 1: Crear un proyecto
1.1 Ubicarse en la carpeta del proyecto 

```bash
cd [nombre-carpeta-proyecto]
```

1.2 Crear proyecto NodeJS
```bash
npm init -y
```
El archivo **package.json** es creado

# Paso 2: Instalar libreria para input
2.1 Instalar la libreria **readline-sync**
```bash
npm install readline-sync
```

2.2 Utilizar la libreria en el codigo para solicitar inputs a los usuarios
```javaScript
const readlineSync = require('readline-sync');

// Wait for user's response.
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}!`);

```
# Paso 3: Escribir el codigo del proyecto

# Paso 4: Ejecutar el proyecto
```bash
node [nombre-archivo-que-tiene-el-codigo].js
```
