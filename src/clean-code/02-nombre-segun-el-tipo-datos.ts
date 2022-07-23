//Arreglos - Arrays
// ['MANZANA', 'PERA', 'PLATANO', 'FRESA', 'PIÑA']

// Malo: porque el nombre no me dice o indica que es un arregle
const fruit = ['MANZANA', 'PERA', 'PLATANO', 'FRESA', 'PIÑA'];

//Regular: ya me indica que es una lista, por lo menos, pero no me indica, de que se trata el contenido
const fruitList = ['MANZANA', 'PERA', 'PLATANO', 'FRESA', 'PIÑA'];

//Bueno: Sintacticamente esta bien, pero aun seguimos con el detalle de no saber de que se trata el contenido.
const fruits = ['MANZANA', 'PERA', 'PLATANO', 'FRESA', 'PIÑA'];

//Mejos: Sintacticamente esta bien, ademas me indica que es un listado de nombres unicamente.
const fruitNames = ['MANZANA', 'PERA', 'PLATANO', 'FRESA', 'PIÑA'];


//Boolean:   true and false  el suso de prefijos como is, an , can ayuda al nombramiento, 
//se preocura que su significado sea positivo y evitar las negaciones en el nombre
//Mal:
const open = true;
const write = true;
const fruit = true;
const active = false;
const noValues = true;
const notEmpty = true;

//Mejor
const isOpen = true;
const canWrite = true;
const hasFruit = true;
const isActive = false;
const hasValues = true;
const isEmpty = false;