var articulos = [
    {nombre: "bicicleta", costo: 200},
    {nombre: "triciclo", costo: 180},
    {nombre: "motocicleta", costo: 1200},
    {nombre: "automovil", costo: 5000}
]

var bicicleta = articulos.find(function(artic){return articulos.nombre === "bicicleta"});