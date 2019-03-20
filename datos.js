let cursos = [
    {
        id:         1,
        nombre:     'Introducción a Node js',
        duracion:   32,
        valor:      0
    },
    {
        id:         2,
        nombre:     'Introducción a bases de datos NoSQL',
        duracion:   40,
        valor:      300000
    },
    {
        id:         3,
        nombre:     'Node js avanzado',
        duracion:   45,
        valor:      500000
    },
    {
        id:         4,
        nombre:     'Curso básico de React',
        duracion:   25,
        valor:      100000
    },
    {
        id:         5,
        nombre:     'Big data',
        duracion:   60,
        valor:      600000
    },
];

let decorator = '***********************************';

let buscarPorId = (id) => cursos.find(curso=> id==curso.id);

let imprimirCurso = (curso=>console.log(`Id del curso: ${curso.id}\nNombre: ${curso.nombre}\nDuración: ${curso.duracion} horas \nValor: ${curso.valor} pesos\n${decorator}`));

let mostrarCursos = ()=> mostrarCurso(0);

/**
 * Mustra la información de cada curso desde el índice contador hasta el último elemento de la lista de cursos
 * @param {*} contador 
 */
let mostrarCurso = (contador) => {
    if(contador<cursos.length) {
        let tiempoEspera = contador == 0 ? 0 : 2000
        setTimeout(()=>{
            imprimirCurso(cursos[contador])
            contador++
            mostrarCurso(contador)
        }, tiempoEspera)
    }
};

module.exports = {
    cursos,
    buscarPorId,
    mostrarCursos,
    imprimirCurso,
    decorator
};