//Archivos
datos.js
principal.js

//Se debe instalar localmente el módulo yargs
npm install yargs

//Listar los cursos
node principal

//Inscribir en cursos
node principal inscribir -i=3 -n='Jose Luis' -x=12345
ó
node principal inscribir -i=1 -n=Jose -x=12345

//Donde:
i: id del cursos
n: nombre del interesado
x: cédula del interesado

//El archivo generado luego de la inscripción se llama inscripcion.txt