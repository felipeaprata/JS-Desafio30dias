function recursivo(num){
  if(num === 0){
    return "";
  }

  if(num === 1){
    return "chunk";
  }else{
    return "chunk-"+ recursivo(num - 1);
  }
}


console.log(recursivo(8))