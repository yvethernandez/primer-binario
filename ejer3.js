// opcion 1

 var input = [1,4,7,2,4,1,9,4,0,2,4,5,12];


 const maxNumber = Math.max(...input);

console.log("el numero mas grande del arreglo es: ",  maxNumber);




// opcion 2

//Array.prototype.max = function(){return Math.max.apply( Math, this )};
//myArray = [1,4,7,2,4,1,9,4,0,2,4,5,12];

//console.log( myArray.max() );



    //opcion3
//var input = [1,4,7,2,4,1,9,4,0,2,4,5,12]

//for(i=0, k=0; i<input.length; i++) {
  //for(j=0; j<i; j++) {
    //if(input[i]>input[j]) {
      //k = input[i];
      //input[i] = input[j];
      //input[j] = k;
    //}
 // }
//}

//console.log('El numero mas pequeño del array es: '+ input[input.length-1]);
//console.log('Numero maas grande: '+ input[0]);
