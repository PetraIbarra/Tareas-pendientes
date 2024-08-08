// Comentario 
/** comentario largos o de lineas*/
console.log('hola mundo'); // Puede ser comillas simples o dobles  ---- comandos de alt + 39 
alert('Hola desde un alert ♥'); 


//var apellido = "Ibarra"; 
let nombre = "Petra";          // guardar una variable como una caja

const pi = 3.14;  // Se asigna una variable constante deduce que tipo de dato es
//String nombre = "Juan"; puedes poner el tipo de datos 
//Tipos de datos

//No definido
let noDefinido; // datos que alguien esta creando no sabemos
//Número 
let cantidad = 50; 
//Cadena de texto o String
let bebida = "agua"; //Cadena de texto con comillas
//boleanos
let activo = true; 

//objeto datos que necesitamos tener juntos

//Objetos
//Persona: nombre, apellido, edad, peso
let persona = {nombre : 'Aurora', apellido : 'Pinzon', edad : 20}; 
console.log(persona); 
//Arrays colección 
let personas = [
    {nombre : 'Melanie', apellido : 'Matus', edad : 21},
    {nombre : 'Mayra', apellido : 'Arias', edad : 19},
    {nombre : 'Karla', apellido : 'Yulenni', edad : 22}
]
console.log(personas); 
console.log(personas [2]); 

//Funciones JS 
//Listado de instrucciones 

function suma(a , b) {
    return a + b; 
   //return 2+2;  
}

let resultadoDeSuma = suma ( 5 , 3 ); // asgnar un espacio en memoria 
console.log(resultadoDeSuma); 

function multiplicacion (a , b) {
    return a * b; 
}
let resultado = multiplicacion (5 , 7) ; 
console.log(resultado); 




