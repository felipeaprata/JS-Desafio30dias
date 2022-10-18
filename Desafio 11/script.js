function coordenadas(arr){
    let novo = [];
  
    for(let i=0; i<=arr[0]; i++){
        for(let j=0; j<=arr[1]; j++){
            novo.push([i,j])
        }
    }

    return novo;
    
}



console.log(coordenadas([2,2]))
console.log(coordenadas([2,7]))
console.log(coordenadas([-3,-3]))
console.log(coordenadas([7,6]))
