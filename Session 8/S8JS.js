
function  fun_1(variable_1 = 5){
    return variable_1 + 3;
}

let resultado = fun_1();
console.log('Resultado',resultado);


let var_message_2 = function show_message_2(message){
    console.log(message);
}

var_message_2('Hola Pitaya');


let array_names = [
    ["Juan",4],
    ["Pedro",3],
    ["Luis",14],
    ["Andrea",8]
]



let the_chill2 = function the_chill_function(names_array,num){
    return (num > names_array.length - 1 )?  'La posicion no esta en el arreglo': names_array[1][num - 1] + names_array[1][num];
}

console.log('Salida de la funcion: ', the_chill2(array_names,1))

function createNewUser(id,user_name,storeData)
{
    if(id > 0 && id < 100)
    {
        storeData(id,user_name);
    }
    else
    {
        console.log("id incorrecto");
    }
}

function store(id,name)
{
    console.log("Guardado : \nID:", id, "\nUsuario: ",name)
}

createNewUser(25,'Dorx1',store);
createNewUser(250,'Dorx2',store)
createNewUser(10,'Dorx3',function(id,name){
    console.log('Guardado: \nID:',id,"\nUsuario: ",name)
});
