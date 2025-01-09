function eliminar_duplicados(arreglo){
    return [...new Set(arreglo)];
}
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

console.log(eliminar_duplicados(arreglo))