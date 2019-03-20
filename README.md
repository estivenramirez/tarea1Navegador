# Archivos
datos.js
principal.js

# Requiere de los módulos yargs, express
npm install yargs
npm install express

# Listar los cursos
node principal

# Inscribir curso
node principal inscribir -i=3 -n='Jose Luis' -x=12345
ó
node principal inscribir -i=1 -n=Jose -x=12345

# Descripción parámetros
i: id del cursos
n: nombre del interesado
x: cédula del interesado

# Resultado inscripción
El resultado de la inscripción si fue exitosa se mostrará en la url http://localhost:3000/