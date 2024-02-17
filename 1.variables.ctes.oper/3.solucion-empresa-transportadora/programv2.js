const readline = require('readline');

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let costoTotalFlete = 0;
let cantidadProductosEnFlete = 0;
let dimensionesDelMayorDimensiones = 0;
let descripcionMayorDimensiones = ``;
let totalImpuestos = 0;

rli.on('line', (linea) => {
    const valoresLinea = linea.split(`,`);
    const descripcion = valoresLinea[0];
    const ancho = +valoresLinea[1];
    const alto = +valoresLinea[2];
    const profundidad = +valoresLinea[3];
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

    console.info(`1. el costo total del flete es: ${costoTotalFlete}`);
    console.info(`2. El producto con mayores dimensiones es: ${descripcionMayorDimensiones} con ${dimensionesDelMayorDimensiones} dimensiones`);
    const promedio = costoTotalFlete / cantidadProductosEnFlete;
    console.info(`3. Promedio del costo de productos en el flete incluyendo impuestos: ${promedio}`);
    console.info(`4. Total impuestos: ${totalImpuestos}`);
});

rli.once('close', () => {
    console.info(`1. el costo total del flete es: ${costoTotalFlete}`);
    console.info(`2. El producto con mayores dimensiones es: ${descripcionMayorDimensiones} con ${dimensionesDelMayorDimensiones} dimensiones`);
    const promedio = costoTotalFlete / cantidadProductosEnFlete;
    console.info(`3. Promedio del costo de productos en el flete incluyendo impuestos: ${promedio}`);
    console.info(`4. Total impuestos: ${totalImpuestos}`);
});