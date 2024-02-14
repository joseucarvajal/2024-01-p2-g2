const readlineSync = require('readline-sync');

let numeroDePaquetes = +readlineSync.question('Ingrese el número de paquetes que desea enviar: ');


let paquetes = [];

for (let i = 0; i < numeroDePaquetes; i++) {
  let ancho = +readlineSync.question(`Ingrese la medida  de ancho del paquete ${i+1}: `);
  ancho = Number(ancho);

  let alto = +readlineSync.question(`Ingrese la medida del alto del paquete ${i+1}: `);
  alto = Number(alto);

  let profundidad = +readlineSync.question(`Ingrese la medida de profundidad del paquete ${i+1}: `);
  profundidad = Number(profundidad);

  const dimensiones = ancho * alto * profundidad;
  const costo = dimensiones * 100;
  let impuesto = 0;
  if (dimensiones > 10000) {
    impuesto = 0.2 * costo;
  } 
  else if (dimensiones > 1000) {
    impuesto = 0.1 * costo;
  }

  paquetes.push({
    dimensiones: dimensiones,
    costo: costo,
    impuesto: impuesto,
    costoTotal: costo + impuesto
  });
}
//Costo total del flete//
let costoTotalFlete = 0;
for (let i = 0; i < paquetes.length; i++) {
  costoTotalFlete += paquetes[i].costoTotal;
}
console.log(`1. El costo total del flete es de $${costoTotalFlete}`);

//Producto de mayor dimensión// 
let mayorDimensiones = 0;
let productomayorDimensiones = 0;
for (let i = 0; i < paquetes.length; i++) {
  if (paquetes[i].dimensiones > mayorDimensiones) {
    mayorDimensiones = paquetes[i].dimensiones;
    productomayorDimensiones = i+1;
  }
}
console.log(`2. El producto que tiene mayor dimensiones es: ${productomayorDimensiones}`);

let costosTotales = 0;
for (let i = 0; i < paquetes.length; i++) {
  costosTotales += paquetes[i].costoTotal;
}
let costoPromedio = costosTotales / paquetes.length;
console.log(`3. El costo promedio de los productos en el flete es de: $${costoPromedio}`);

let impuestosTotales = 0;
for (let i = 0; i < paquetes.length; i++) {
  impuestosTotales += paquetes[i].impuesto;
}
console.log(`4. La empresa necesita saber cuanto debe pagar de impuestos por el flete: $${impuestosTotales}`);