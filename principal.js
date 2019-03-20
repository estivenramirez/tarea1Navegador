const fs = require('fs');
const {cursos, buscarPorId, mostrarCursos, imprimirCurso, decorator} = require ('./datos')
const express = require('express')
const app = express()
 
const inscripcion = {
    idCurso             : {demand: true,   alias: 'i'},
    nombreInteresado    : {demand: true,   alias: 'n'},
    cedula              : {demand: true,   alias: 'x'}
}


const argv = require('yargs').command('inscribir', 'Incribirse en cursos', inscripcion).argv

let inscribirCurso= () => {
    let cursoAInscribir = buscarPorId(argv.i)
  
    if(cursoAInscribir) {
        console.log(decorator+'Información del curso'+decorator)
        imprimirCurso(cursoAInscribir)

        let texto = `<p>El estudiante ${argv.n} con cédula ${argv.x}</br>Se ha matriculado en el curso llamado '${cursoAInscribir.nombre}' con id ${cursoAInscribir.id}</br>Tiene una duración de ${cursoAInscribir.duracion} horas y un valor de ${cursoAInscribir.valor} pesos</p>`
        console.log('Se realizó la incripción al curso')
        console.log(decorator)

        app.listen(3000)

        app.get('/', function (req, res) {
            res.send(texto)
         })
         console.log("Ver resultado de la inscripción en el navegador, url http://localhost:3000/")
        
    } else {
        console.log(`El curso con id ${argv.i} no existe!!!\n${decorator}`)
        mostrarCursos()
    }
};

if(argv._[0] == 'inscribir')
    inscribirCurso()
else 
    mostrarCursos()

    