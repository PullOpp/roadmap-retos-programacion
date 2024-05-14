/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */



// OPERADORES

// Operadores de asignacion
// let x = 1;
// let y = 2;
// console.log(x = y) // Significado x = y
// console.log(x += y) // Significado x = x + y
// console.log(x -= y) // Significado x = x -  y
// console.log(x *= y) // Significado x = x * y
// console.log(x /= y) // Significado x = x / y
// console.log(x %= y) // Significado x = x % y
// console.log(x **= y) // Significado x = x ** y

//////////////////////////////////////////////////////////

// Operadores de Inremento y decremento

// Operadores de incremento sufijo/prefijo y decremento

// let x = 1;
// let y = 2;


// console.log(--y);
// console.log(y++);
// console.log(y)


// A++ //Operador de incremento sufijo.

// A-- //Operador de decremento sufijo

// ++A //Operador de incremento prefijo

// --A //Operador de decremento prefijo

/////////////////////////////////////////////////////

// Operadores UNARIOS

// Una operacion unaria es una operacion con un solo operando.

// delete El operador delete elimina una propiedad de un objeto.

//void El operador boid descarta el valor de retorno de una exprecion.

// typeof El operador typeof determina el tipo de un objeto dado.

// (+) El operador unario mas convierte su operando al tipo number.

//(-) El Operador unario de negacion convierte su operando al tipo Number y luego lo niega.

//(~) Operador NOT bit a bit.

//(!)  Operador NOT logico

//OPERADORES ARITMETICOS

// +
// Operador de adición o suma.

// -
// Operador de sustracción o resta.

// /
// Operador de división.

// *
// Operador de multiplicación.

// %
// Operador de residuo.

// **
// Operador de exponenciación.

////////////////////////////////////////////////////////////

// Operadores relacionales
// Un operador de comparación compara sus operandos y devuelve un valor Boolean basado en si la comparación es verdadera o no.

// in
// El operador in determina si un objeto tiene una determinada propiedad.

// instanceof
// El operador instanceof determina si un objeto es una instancia de otro objeto.

// <
// Operador menor que.

// >
// Operador mayor que.

// <=
// Operador menor o igual a.

// >=
// Operador mayor o igual a.

////////////////////////////////////

// Operadores de igualdad
// El resultado de evaluar un operador de igualdad siempre es de tipo Boolean basado en si la comparación es verdadera.

// ==
// Operador de igualdad.

// !=
// Operador de desigualdad.

// ===
// Operador de igualdad estricta.

// !==
// Operador de desigualdad estricta.
// Operadores de desplazamiento de bits
// Operaciones para cambiar todos los bits del operando.

// <<
// Operador de desplazamiento bit a bit a la izquierda.

// >>
// Operador de desplazamiento bit a bit a la derecha.

// >>>
// // Operador de desplazamiento bit a bit a la derecha sin signo.

//////////////////////////////////////////////////////////////

// Operadores binarios bit a bit
// Los operadores bit a bit tratan a sus operandos como un conjunto de 32 bits (ceros y unos) y devuelven valores numéricos estándar de JavaScript.

// &
// AND bit a bit.

// |
// OR bit a bit.

// ^
// XOR bit a bit.

//////////////////////////////

// Operadores lógicos binarios
// Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano.

// &&
// AND lógico.

// ||
// OR lógico.

///////////////////////////////////////////////////////////

// Operador condicional (ternario)
// (condition ? ifTrue : ifFalse)
// El operador condicional devuelve uno de dos valores según el valor lógico de la condición.

// Operadores de asignación
// Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.

// =
// Operador de asignación.

// *=
// Asignación de multiplicación.

// /=
// Asignación de división.

// %=
// Asignación de residuo.

// +=
// Asignación de suma.

// -=
// Asignación de sustracción

// <<=
// Asignación de desplazamiento a la izquierda.

// >>=
// Asignación de desplazamiento a la derecha.

// >>>=
// Asignación de desplazamiento a la derecha sin signo.

// &=
// Asignación de AND bit a bit.

// ^=
// Asignación de XOR bit a bit.

// |=
// Asignación de OR bit a bit.

// &&=
// Asignación de AND lógico.

// ||=
// Asignación de OR lógico.

// ??=
// Asignación de anulación lógica.

//  [a, b] = [1, 2] {a, b} = {a:1, b:2}
// La desestructuración te permite asignar las propiedades de un arreglo u objeto a variables utilizando una sintaxis que se parece a los arreglos u objetos literales.

// Operador coma
// ,
// El operador coma permite evaluar múltiples expresiones en una sola declaración y devuelve el resultado de la última expresión.

////////////////////////////////////////////////////////

// CONDICIONALES

/*
if(CondicionVerdadera){
    si la condicion arriba es verdadera
    Se va a ejecitar este codigo Por Ejemplo
    console.log("Se ha ejecutado tu codigo.")
}
*/

///////////////////////////////////////////////////////

/*
else{
    Esto significa de otra manera 
    quiere decir que si no se cumple la primera condicion se va a ejecutar este bloque.
}
*/
//////////////////////////////////////////////////////7

/*
else if(CondicionVerdadera){
    else if lo que dice es que si no se cumple en primer valor del if pero se cumple alguno de los if else siguientes este se va a ejecutar.
}
*/

////////////////////////////////////////////////////////7

/*
switch (exprecion, condicion) {
case eleccion1: 
codigo a ejecutar
break;

case eleccion2: 
codigo a ejecutar
break;

case eleccion3: 
codigo a ejecutar
break;

Se pueden ejecutar tantas opciones como sean necesarias

case default: 
Por si acaso, corre este codigo.
};
*/

/////////////////////////////////////////////////////

/* ( condición ) ? ejecuta este código : ejecuta este código en su lugar */

/////////////////////////////////////////////////////

//BUCLES E ITERACION



//For es una estructura de control que puede declarar su variable en su exprecion lo que hace que se puedan generar  multiples iteraciones.
// for(let i = 0;i < 10;i++)(
//     console.log(i)
// )

//Bucles Do While
//do while ejecuta una linea de codigo y luego revisa la condicion, si esta es verdadera continuara hasta que sea falsa.

    // let i = 0; 
    // do { i += 1; console.log(i);
        
    // } while (i < 5);

    // //While

    // let saludo = "Hello"
    // let u = 0;

    // while(u <= saludo.length){
    // console.log(saludo)
    // u++
    // }

//

/////////////////////////////////////////////77

//Declaracion Labeled 

// Esta declaracion se basa es hacer referencia a codigo en cualquier parte de el programa utlizando las declaraciones
// break y continue

// break lo que hace es terminar o finalizar el bucle en cuestion
// luego de cumplir alguna condicion.

// continue lo que hace es continuar con el bucle recorriendo el codigo. saltandose el bloque de codigo despues de esta ddeclaracion.




 //FOR IN
// // for (variable in objeto)
//   instrucción

// function tipoDeContrato(){
//         if(opcion = 1){
//             console.log("El tipo de contrato es a un particular")
//         }
//         else{
//             console.log("El tipo de contrato es atraves de una inmobiliaria.")
//         }
//     };

// const VIVIENDA = {
//     Inmueble : "Departamento",
//     Ciudad : "Hurlingham",
//     Precio : 25000,
//     Habitaciones : 2,
//     Baños : 1,
//     Contratista : tipoDeContrato(1)
// };

// for (const propiedad in VIVIENDA) {
//     console.log(propiedad + ': ' + VIVIENDA[propiedad])
// }
// for in interactua sobre las posiciones de los objetos y sus propiedades.



//FOR OF
// for (variable of objeto)

    // let departamentos_precio = [25000,35000,45000]

    // for (departamento of departamentos_precio) {
    //     console.log(departamento)
    // }

//     // expresión
// for of interactua con el contenido de las posiciones, devolviendo valores concretos no de posicion.



//Extra

    function imprimirNumero(numMin, numMax){
    let i = numMin

    for(let i = 0;i < numMax; i++){
        if(i % 2 == 0 && !(i % 3 == 0)){
            if(i === 16 ){
                continue;
            }
            console.log(`Tu Numero ${i} es divisible por 2`);
        }
    }
}
console.log(imprimirNumero(10, 55))
