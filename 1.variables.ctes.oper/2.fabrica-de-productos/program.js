/*
    Una fabrica produce diferentes tipos de productos:
    1. Productos tipo 1: productos para el hogar, tienen un determinado costo de produccion
    2. Productos tipo 2: productos de ropa deportiva, tienen un determinado costo de produccion
    3. Productos tipo 3: productos de limpieza, tienen un determinado costo de produccion

    La empresa necesita ingresar informacion de los productos:
        - costo de produccion
        - categoria
        - impuesto de produccion por producto dado en porcentaje

    La empresa necesitar saber:
        1. Cual es el costo total de la produccion de todos los productos
        2. Dada una categoria, la empresa necesita saber cual es el costo de los productos en esa categoria
        3. Cuanto es el valor de impuestos que debe pagar la empresa por la produccion de los productos

    Ejemplo:
        Input:
            producto 1: 
                - categoria: 1
                - costoProduccion: 1000
                - impuestoProduccion: 15%
            producto 2: 
                - categoria: 1
                - costoProduccion: 200
                - impuestoProduccion: 10%
            producto 3: 
                - categoria: 3
                - costoProduccion: 2000
                - impuestoProduccion: 20%
            producto 4: 
                - categoria: 2
                - costoProduccion: 100
                - impuestoProduccion: 20%
        Output:
            1. Cual es el costo total de la produccion de todos los productos
                1150 + 220 + 2400 + 120 = 3890
            2. Dada una categoria, la empresa necesita saber cual es el costo de los productos en esa categoria
                categoria: 1
                1150 + 220 = 1370
            3. Cuanto es el valor de impuestos que debe pagar la empresa por la produccion de los productos
                150 + 20 + 400 + 20 = 590
*/

const readlineSync = require('readline-sync');
const cantidadProductos = +readlineSync.question(`Ingrese la cantidad de productos: `);
const categoriaParaCalcularCostoProductos = +readlineSync.question(`Ingrese la categoria para calcular el total de costos de produccion: `);

let costoTotalProduccion = 0;
let costoTotalProduccionPorCategoria = 0;
let costoTotalImpuestos = 0;

for(let i=0; i<cantidadProductos; i++){
    const categoriaProducto = readlineSync.question(`Ingrese la categoria del producto ${i+1}: `);
    if(categoriaProducto < 1 || categoriaProducto > 3){
        console.error(`La categoria del producto no existe`);
    }
    else {
        const costoProduccion = +readlineSync.question(`Ingrese el costo de produccion del producto:  ${i+1}: `);
        if(costoProduccion <= 0){
            console.error(`El costo de produccion no es valido`);
        }
        else 
        {
            const impuestoProduccion = +readlineSync.question(`Ingrese el impuesto de produccion del producto:  ${i+1}: `);
            if(impuestoProduccion < 0 || impuestoProduccion > 100){
                console.error(`El impuesto de produccion no es valido`);
            }
            else 
            {
                const costoRealImpuesto = (costoProduccion*(impuestoProduccion/100));
                costoTotalImpuestos = costoTotalImpuestos + costoRealImpuesto;

                const costoRealProducto = costoProduccion + costoRealImpuesto;
                costoTotalProduccion = costoTotalProduccion + costoRealProducto;
                

                if(categoriaProducto == categoriaParaCalcularCostoProductos){
                    costoTotalProduccionPorCategoria = costoTotalProduccionPorCategoria + costoRealProducto;
                }
            }

        }
    }
}

console.info(`1. El costo total de produccion es: ${costoTotalProduccion}`);
console.info(`2. El costo total de produccion por categoria: ${costoTotalProduccionPorCategoria}`);
console.info(`3. El costo total de impuestos pro produccion es: ${costoTotalImpuestos}`);
