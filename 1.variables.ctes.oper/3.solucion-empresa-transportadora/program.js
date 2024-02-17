const readlineSync = require('readline-sync');

let = otroEmpaque = `1`;
let costoTotalFlete = 0;
let cantidadProductosEnFlete = 0;
let dimensionesDelMayorDimensiones = 0;
let descripcionMayorDimensiones = ``;
let totalImpuestos = 0;
do
{
    const descripcion = readlineSync.question(`Ingrese la descripcion del producto a empacar: `);
    const ancho = +readlineSync.question(`Ingrese el ancho del producto a empacar: `);
    if(isNaN(ancho)){
        console.error(`El ancho debe ser un valor numerico`);
        continue;
    }
    if(ancho < 0){
        console.error(`El ancho debe ser un valor positivo`);
        continue;
    }

    const alto = +readlineSync.question(`Ingrese el alto del producto a empacar: `);
    if(isNaN(alto)){
        console.error(`El alto debe ser un valor numerico`);
        continue;
    }
    if(alto < 0){
        console.error(`El alto debe ser un valor positivo`);
        continue;
    }

    const profundidad = +readlineSync.question(`Ingrese el profundidad del producto a empacar: `);
    if(isNaN(profundidad)){
        console.error(`El profundidad debe ser un valor numerico`);
        continue;
    }
    if(profundidad < 0){
        console.error(`El profundidad debe ser un valor positivo`);
        continue;
    }

    const dimensiones = alto * ancho * profundidad;
    console.info({dimensiones});
    let costoTransportProducto = dimensiones * 100;
    console.info({costoTransportProducto});
    let impuesto = 0;
    if(dimensiones > 10000){
        impuesto = costoTransportProducto * 0.2;
    }
    else if(dimensiones > 1000){
        impuesto = costoTransportProducto * 0.1;
    }

    console.info({impuesto});

    costoTransportProducto = costoTransportProducto + impuesto;
    console.info(`costo transporte / iva incluido: ${costoTransportProducto}`);

    costoTotalFlete += costoTransportProducto;

    if(dimensiones > dimensionesDelMayorDimensiones){
        dimensionesDelMayorDimensiones = dimensiones;
        descripcionMayorDimensiones = descripcion;
    }

    cantidadProductosEnFlete++;
    totalImpuestos += impuesto;

    otroEmpaque = readlineSync.question(`Desea ingresar otro empaque? si=1, no=0: `);

} while(otroEmpaque == `1`);

console.info(`1. el costo total del flete es: ${costoTotalFlete}`);
console.info(`2. El producto con mayores dimensiones es: ${descripcionMayorDimensiones} con ${dimensionesDelMayorDimensiones} dimensiones`);
const promedio = costoTotalFlete / cantidadProductosEnFlete;
console.info(`3. Promedio del costo de productos en el flete incluyendo impuestos: ${promedio}`);
console.info(`4. Total impuestos: ${totalImpuestos}`);