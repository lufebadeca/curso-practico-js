var articulos = [
    {nombre: "bicicleta", costo: 200},
    {nombre: "triciclo", costo: 180},
    {nombre: "motocicleta", costo: 1200},
    {nombre: "automovil", costo: 5000}
]

//IMPORTANT: starting point: an objects array, hence each element has several properties

var articulosFiltrados = articulos.filter(function(artic){
    return articulos.costo >= 500;
    //returns a new array of all the elements of the original array that comply with the specified criteria
});

var articulosmapeados = articulos.map(function(artic){
    return articulos.nombre;
    //returns a new array with the desired property for all elements
});

var hayBicicleta = articulos.find(function(artic){
    return articulos.nombre === "bicicleta";
    //returns an object from the object array that complies with the search criteria
});

var articulosbaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
    //returns a boolean if any element of the array complies with the condition
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
    //returns the specified info for each elements of the array
});
