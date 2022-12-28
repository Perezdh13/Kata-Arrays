let listaA = [0,1,2];//lista antigua de empleados 
let listaB = [0,1,2,3,4];//lista nueva  de empleados
let listaC = [0,1,2,0,1,2,3,4];//union de listas anteriores
let listaD = [];//lista limpia sin duplicados

function compara(a,b){
  for(let a=0;a<=listaA.length;a++){
    for(let b=0;b<=listaA.length;b++);
  if((a == 0) && (b == 0)){
    return "empleado duplicado"
  }
  if((a = 1) && (b == 1)){
    return "empleado duplicado"
  }
  if((a = 2) && (b == 2)){
    return "empleado duplicado"
  }
  if((a = "") && (b == 3)){
    return "empleado nuevo"
  }
}
}
module.exports = compara;