function voltando(numeros){
    let rever = [];
    let max = numeros;
    let maxTamanho = max.length-1;


    // for(let i=0; i <= max.length-1; i++){
    //     rever[i] = max[maxTamanho];
    //     maxTamanho--;
    // }

    for(let i=0; i< numeros.length; i++){
        rever[i] = numeros[numeros.length-1-i];
    }

    return rever;
}


console.log(voltando([0,9,6,8,9,1,5,7,2]));
console.log(voltando(['Oh','Hi','Mark']));
console.log(voltando([false,true,true,true]));
console.log(voltando(["It's","not",true,0]));



