/*
let nombre: string = "David";

nombre = "hol";

console.log(nombre)


let numero:number = 23;
console.log(numero);

// crear objeto
type address = {
    city : string,
    country :string,
    ad: string,
}

type estudiante ={
    fistName :string,
    lastName :string,
    age ?: number | string,
    address?: address,

}


const estudiante1: estudiante = {
    fistName: "David",
    lastName: "Garcia",
    age: 32,
    address: {
        ad: "Calle 45 # 24 -40",
        city: "Bogotá",
        country: "Colombia"
    }
}

const est2: estudiante ={
    fistName: "Juan",
    lastName: "Perez",
    age:"doce",
    address: {
        ad: "Calle 133 # 156 A - 20",
        city:"Rio de janeiro",
        country: "Brasil"
    }
}

const est3: estudiante ={
    fistName: "Maria",
    lastName: "Lopez",
    age: 25,
    address: {
        ad: "Calle 15 # 23 - 45",
        city: "Lima",
        country: "Peru"
    }
}

//funcion para mostrar informacion del estudiante 
//version
const mostrarEstudiante = 
    (estudiante: estudiante): string =>{
    const {fistName,lastName} = estudiante;
    return `Nombre de estudiante: ${fistName}  apellido: ${lastName}`;

}

console.log(mostrarEstudiante(estudiante1));
estudiantes.forEach((estudiante: estudiante) => {
    console.log(mostrarEstudiante(estudiante));
});
*/



type Estudiante ={
    fistName :string,
    lastName :string,
    age ?: number | string,

}


let estudiantes: Estudiante[]= []

const agregarEstudiante =(estudiante:Estudiante) =>{
    estudiantes.push(estudiante)

}

//agregar estudantes 
agregarEstudiante({
    fistName: "Carlos",
    lastName: "Ortega",
    age:25
})

agregarEstudiante({
    fistName: "Maria",
    lastName: "Lopez",
    age:34
})

agregarEstudiante({
    fistName: "sofia",
    lastName: "castro",
    age:54
})



/*const eliminarEstudiantes = (indice: number) => {
    estudiantes= estudiantes.splice(indice,1 )
}

eliminarEstudiantes(1)*/


//acualizar estudiante por su indice

/*const actualizarEstudiantes = (indice: number, estudiante: Estudiante) => {
    estudiantes[indice]= estudiante
}

actualizarEstudiantes(0, {
    fistName: "David",
    lastName: "Garcia",
    age: 32
})
*/


//eliminar por edad

const eliminarEstudiantesEdads = (edad: number | string) => {
    estudiantes= estudiantes.filter(estudiante => estudiante.age!= edad)
}

eliminarEstudiantesEdads(54)

console.log(estudiantes);
