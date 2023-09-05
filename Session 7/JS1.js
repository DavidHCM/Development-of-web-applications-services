/*
alert("Soy una alerta por fuera");

let x = 5;
let y = 10;
const z = x + y;

console.log("X value:",x,"\n","Y value:",y,"\n","Z const:",z )
let nombre1 = 'Pepito', nombre2 = 'Panchito', nombre3= 'Juanito';
console.log(nombre1,nombre2,nombre3);

let array_1 = [
    1,
    'texto',
    'otro',
    true,
    [
        'Sub-value 1',
        nombre1
    ]
];
 */
let number1= 3;
let number2 = 3.14159;
let string1 = 'Cadena 1';
let string2 = 'Cadena 2';
console.log(number1 + number2);
console.log(string1 + string2);
console.log(number1 - number2);
console.log(number1 * 2.5);
console.log(number1 / number2);
console.log(number1 = number2);
console.log(2**3);
console.log(number1++);
console.log(++number1);
console.log(number1--);
let x = 5;






let array_2 = [
  1, 2, 3
];
console.log("Promedio: " + func_1(array_2));

function func_1(array2)
{
    let temp = 0;
    for(let i=0;i<array2.length;i++)
    {
        temp += array2[i];
    }
    return temp / array2.length;
}
