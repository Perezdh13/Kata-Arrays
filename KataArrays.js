
let listaC = [0,1,2,0,1,2,3,4];//union de listas anteriores
let listaD = [];//lista limpia sin duplicados

// function compara(a,b){
//   for(let a=0;a<=listaA.length;a++);
//   for(let b=0;b<=listaA.length;b++);
//   if((a == 0) && (b == 0)){
//     return "empleado duplicado"
//   }
//   if((a = 1) && (b == 1)){
//     return "empleado duplicado"
//   }
//   if((a = 2) && (b == 2)){
//     return "empleado duplicado"
//   }
//   if((a = "") && (b == 3)){
//     return "empleado nuevo"
//   }
// }

function compara (listaA, listaB){
  for(let empleadoA of listaA){
   for( let empleadoB of listaB){
    if(empleadoA === empleadoB){
      return "empleado duplicado"
    }
   }
  }
}

module.exports = compara;