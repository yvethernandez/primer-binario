
var input =  [3,6,1,8,2,3,6,3,2,5,6];

var repetidos = {};

input.forEach(function(numero){
  repetidos[numero] = (repetidos[numero] || 0) + 1;

  if(repetidos[numero] == 3)
document.write(`${numero} es el mas repetido, se repite tres veces `);

});

console.log(repetidos);

