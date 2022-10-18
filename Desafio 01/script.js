function teste(){
    let tamanho = arguments.length;
    let sum=0;
    for(let i=0; i<tamanho; i++){
        sum = sum + arguments[i];
    }

    return sum / tamanho;
}


console.log(teste2(25,75,15,45));

function teste2(...numeros){
    const sum = numeros.reduce((total,num)=>total+num,0);

    return sum / numeros.length;
}