const readlineSync = require('readline-sync');

let nominaTotal = 0;
let subsidioHijos = 0;
let nominaMujeres = 0;
let nominaHombres = 0;
let sueldoEmpleadoMasAlto = 0;
let empleadoMasCaro = 0;
let gastoHijosSecundaria = 0;
let gastoViajesEmpleadosExtranjeros = 0;

//Pedimos al usuario la cantidad de empleados que tiene la empresa.//
console.log('');
const numeroEmpleados = +readlineSync.question('Ingrese  el número de empleados que tiene la empresa: ');
if(isNaN(numeroEmpleados)){
    console.error('El valor a ingresar debe ser númerico. Intentelo nuevamente.');
}
else{
    if(numeroEmpleados <= 0){
        console.error('El valor a ingresar debe ser positivo. Intentelo nuevamente.');
    }
}
/*Pedimos los valores de hijos en primaria, hijos en secundaria e hijos en universidad 
para los subisidios de estudio.*/
console.log('');
const subsidioPrimaria = +readlineSync.question('Ingrese el valor de subsidio que desea para los hijos que estudian en primaria: ');
if(isNaN(subsidioPrimaria)){
    console.error('El valor a ingresar debe ser numerico. Intene nuevamente.');
}
const subsidioSecundaria = +readlineSync.question('Ingrese el valor de subsidio que desea para los hijos que estudian en secundaria: ');
if(isNaN(subsidioSecundaria)){
    console.error('El valor a ingresar debe ser numerico. Intene nuevamente.');
}
const subsidioUniversida = +readlineSync.question('Ingrese el valor de subsidio que desea para los hijos que estudian en universidad: ');
if(isNaN(subsidioUniversida)){
    console.error('El valor a ingresar debe ser numerico. Intene nuevamente.');
}

/*Le pedimos al usuario que ingrese el valor de los vuelos para los empleados extranjeros
(ida y vuelta).*/

const valorVuelos = +readlineSync.question('Ingrese el valor estimado de los vuelos para los empleado extranjeros: ');
if(isNaN(valorVuelos)){
    console.error('El valor a ingresar debe ser numerico. Intente nuevamente.');
}

//Pedimos información del empleado para saber si el empleado es hombre o mujer.//

for(let i = 1; i <= numeroEmpleados; i++){
    console.log('');
    let sueldoEmpleado = +readlineSync.question(`Ingrese el sueldo del empleado ${i}: `);
    const generoEmpleado = readlineSync.question(`Ingrese el genero del empleado ${i} (f/m): `);

    let estratoEmpleado = +readlineSync.question(`Ingrese el estrato social del empleado ${i}: `);

    //Agregamos el beneficio al sueldo con respecto al estrato del empleado.//   
     
        let beneficioPorEstrato = 0;
    
        if(estratoEmpleado == 1){
            beneficioPorEstrato = sueldoEmpleado * 0.15;
        }
        else if(estratoEmpleado == 2){
            beneficioPorEstrato = sueldoEmpleado * 0.10;
        }
        else if(estratoEmpleado == 3){
            beneficioPorEstrato = sueldoEmpleado * 0.05;
        }
    
//Agremos el subsiodio para los empleados que son extranjeros.//

    let subsidioVuelo = 0;

    let empleadoExtranjero = readlineSync.question(`¿El empleado es extrajero? (si/no): `);
    if(empleadoExtranjero.toLowerCase() == 'si'){
        subsidioVuelo += valorVuelos * 2;
        gastoViajesEmpleadosExtranjeros +=  subsidioVuelo;
    }


/*Agregamos el subsidio a los empleados que tienen hijos que estan estudiando en primaria, secuandaria y
universidad.*/

    let hijosEmpleados = readlineSync.question(`¿El empleado ${i} tiene hijos? (si/no): `);
    if(hijosEmpleados.toLowerCase() == 'si'){

        let hijosPrimaria = +readlineSync.question(`Ingrese cuantos hijos tiene el empleado ${i} en primaria: `);
        let hijosSecundaria = +readlineSync.question(`Ingrese cuantos hijos tiene el empleado ${i} en secundaria: `);
        let hijosUniversidad = +readlineSync.question(`Ingrese cuantos hijos tiene el empleado ${i} en la universidad: `);

        subsidioHijos = (subsidioPrimaria * hijosPrimaria) + (subsidioSecundaria * hijosSecundaria) + (subsidioUniversida * hijosUniversidad);
        gastoHijosSecundaria += subsidioSecundaria * hijosSecundaria;
    }

//Agregamos el beneficio a los empleados que viven en la zona rural.//

    let beneficioSectorRural = 0;

    let empleadoZonaRural = readlineSync.question(`El empleado vive en zona rural (si/no): `);
    if(empleadoZonaRural.toLowerCase() == 'si'){
        beneficioSectorRural += 35000;
    }

    let sueldoTotalEmpleado = 0;
    
    sueldoTotalEmpleado = sueldoEmpleado + beneficioPorEstrato + beneficioSectorRural + subsidioHijos + subsidioVuelo;

    if(sueldoTotalEmpleado > sueldoEmpleadoMasAlto){
        sueldoEmpleadoMasAlto = sueldoTotalEmpleado;
        empleadoMasCaro = i;
    }

// Parte para sacar el total de la nomina de las mujeres y de  los hombres.//

    if(generoEmpleado.toLowerCase() == 'f'){
        nominaMujeres += sueldoTotalEmpleado;
    }
    else {
        nominaHombres += sueldoTotalEmpleado;
    }
    
    console.log('');
    console.log(`El empleado ${i} tiene un bono adicional por extranjeria de: ${subsidioVuelo} por los vuelos de ida y vuelta.`);
    console.log(`El sueldo del empleado ${i} (con todos los subsidios) es de: $${sueldoTotalEmpleado}`);
    console.log('');

    nominaTotal +=  numeroEmpleados + sueldoTotalEmpleado;
    
}
console.log('');
console.info(`La nomina total de la empresa es de: $${nominaTotal}`);
console.info(`La nomina de los empleado hombres es de: $${nominaHombres}`);
console.info(`La nomina de las empleadas mujeres es de: $${nominaMujeres}`);
console.info(`El empleado que tiene el sueldo mas alto es el empleado numero ${empleadoMasCaro} con un sueldo total de: $${sueldoEmpleadoMasAlto}`);
console.info(`La empresa esta gastando un total de $${gastoHijosSecundaria} por los subsidios para los empleados que tienen hijos en secundaria.`);
console.info(`La empresa esta gastando un total de $${gastoViajesEmpleadosExtranjeros} en los vuelos de los empleados extranjeros.`);