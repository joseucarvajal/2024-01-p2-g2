const readlineSync = require('readline-sync');

let capacidadPersonas = 0;
let cantidadDePersonasIngresadas = 0;
let contadorPersonasGeneroFemenino = 0;
let contadorPersonasGeneroMasculino = 0;
let sumaTotalDeEdades = 0;

function ingresarPersona(){
    console.info(`Cantidad de personas que han ingresado: ${cantidadDePersonasIngresadas} de ${capacidadPersonas}`);

    const edad = +readlineSync.question('Ingrese su edad: ');

    if(isNaN(edad)){
        console.error(`La edad debe ser un valor numerico`);
    }
    else 
    {
        if(edad <= 0){
            console.error(`La edad debe ser un valor positivo mayor a cero`);
        }
        else
        {
            if(edad < 18){
                console.error(`La persona no puede ingresar porque es menor de edad`);
            }
            else 
            {
                const genero = readlineSync.question('Ingrese su genero f/m: ');
                cantidadDePersonasIngresadas++;
                sumaTotalDeEdades = edad + sumaTotalDeEdades;

                if(genero.toLowerCase() == 'f'){
                    contadorPersonasGeneroFemenino++;
                }
                else 
                {
                    contadorPersonasGeneroMasculino++;
                }
            }
        }
    }
}

capacidadPersonas = +readlineSync.question('Ingrese la capacidad permitida a ingresar: ');
if(isNaN(capacidadPersonas)){
    console.error(`La capacidad permitida a ingresar debe ser un valor numerico`);
}
else {

    if(capacidadPersonas <= 0){
        console.error(`La capacidad permitida a ingresar debe ser mayor a cero`);
    }
    else
    {
        while(cantidadDePersonasIngresadas < capacidadPersonas){
            ingresarPersona();
        }
        
        console.info(`Cantidad de personas que han ingresado: ${cantidadDePersonasIngresadas} de ${capacidadPersonas}. No hay mas cupo`);
        console.info(`Cantidad mujeres: ${contadorPersonasGeneroFemenino}`);
        console.info(`Cantidad hombres: ${contadorPersonasGeneroMasculino}`);
        const promedioEdad = sumaTotalDeEdades / cantidadDePersonasIngresadas;
        console.info(`El promedio de la edad de personas ingresadas es: ${promedioEdad}`);
    }
}