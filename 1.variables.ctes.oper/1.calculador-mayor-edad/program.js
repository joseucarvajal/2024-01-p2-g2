const readlineSync = require('readline-sync');

let edad = +readlineSync.question('Ingrese su edad: ');
console.info({edad});

if(edad < 0){
    console.error(`La edad no puede ser un valor negativo`);
}
else
{
    if(edad >= 18){
        console.info(`Mayor de edad`);
    }
    else 
    {
        console.info(`Menor de edad`);
    }
}
