const readlineSync = require('readline-sync');

let cantidadDeEmpaques = +readlineSync.question("Cuántos empaques quiere agregar:  ");
let dimensionesTotal = 0;
let totalImpuestos = 0;
let precioTotalDelFlete = 0;
let promedioDelCostoDeProductos = 0;
let paqueteMayorDimensiones = 0;

for (let i = 1; i <= cantidadDeEmpaques; i++) {
    let anchoDelPaquete = +readlineSync.question(`Ingrese cuál es el ancho del paquete ${i}: `);
    let alturaPaquete = +readlineSync.question(`Ingrese la altura del paquete ${i}: `);
    let profundidadDelPaquete = +readlineSync.question(`Ingrese es la profundidad del paquete ${i}: `);

    let calculoDeDimensiones = anchoDelPaquete * alturaPaquete * profundidadDelPaquete * 100;
    precioTotalDelFlete += calculoDeDimensiones;

    let impuestosDelPaquete = 0;

    if (calculoDeDimensiones > 10000) {
        impuestosDelPaquete = calculoDeDimensiones * 0.20;
    } else if (calculoDeDimensiones > 1000) {
        impuestosDelPaquete = calculoDeDimensiones * 0.1;
    }

    totalImpuestos += impuestosDelPaquete;

    if (calculoDeDimensiones > paqueteMayorDimensiones) {
        paqueteMayorDimensiones = calculoDeDimensiones;
        numeroMayorDimension = i;
    }
}

dimensionesTotal = precioTotalDelFlete + totalImpuestos;
promedioDelCostoDeProductos = (precioTotalDelFlete + totalImpuestos) / cantidadDeEmpaques;

console.log(`1. Debe pagar en total del flete es: $${dimensionesTotal}`);
console.log(`2. El producto de mayores dimensiones es el pauqete: ${numeroMayorDimension} `);
console.log(`3. El promedio de costos total de los productos es: $${promedioDelCostoDeProductos}`);
console.log(`4.  ${totalImpuestos} en impuestos.`);