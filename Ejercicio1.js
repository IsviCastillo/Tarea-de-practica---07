const obtenNombres = (array) => {
    return array.map(obj => obj.nombre);
}
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 28 }
];
console.log(obtenNombres(personas)); 