let calificaciones = [
    [6,8,5,5,10],
    [6,5,7,3,8],
    [5,5,8,1,4],
    [6,9,8,10,5],
    [5,8,5,7,9]
]

let fn_aprobado = function aprobogrupo(grupo,promedio)
{
    console.log("El grupo ",grupo, " aprobó con un promedio de: ",promedio);
}

let fn_reprobado = function reprobogrupo(grupo,promedio)
{
    console.log("El grupo ",grupo, " reprobo con un promedio de: ",promedio);
}

let get_promedio = function promedio(array)
{
    let prom = 0;
    for (let i = 0;i < array.length;i++)
    {
            prom += array[i];
    }
    return prom / array.length;
}

function getCalificaciones(calificiaciones,fn_aprobado,fn_reprobado,get_promedio)
{
    for(let i = 0;i < calificiaciones.length;i++)
    {
        if(get_promedio(calificiaciones[i]) >= 6)
        {
            fn_aprobado(i,get_promedio(calificiaciones[i]));
        }
        else
        {
            fn_reprobado(i,get_promedio(calificiaciones[i]));
        }
    }
    console.log('Califiaciones terminadas');
}


getCalificaciones(calificaciones,fn_aprobado,fn_reprobado,get_promedio);
