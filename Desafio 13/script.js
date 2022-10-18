function codigo(num){
    let numeros = num.toString().split('');
    let pares = 0;
    let impares = 0;
    let result = 0;

    for(i=0; i<numeros.length; i+=2){
        pares += parseInt(numeros[i]);
    }
    for(i=1; i<numeros.length; i+=2){
        impares += parseInt(numeros[i]);
    }

    pares *= 3;
    result = pares + impares;

    if(result%10==0){
        return true
    }else{
        return false
    }
  
}


//codigo(547020743789)
// console.log(codigo(547020743789))
// console.log(codigo(301354030348))
// console.log(codigo(301354030349))
// console.log(codigo(123456789872))


//resultado
function generateDigit(arr){
    const step1 = arr.reduce((accum, current, index)=>{
        return index === 0 || index % 2 === 0 ? accum + current : accum
    }, 0)

    const step2 = step1 * 3
    const step3 = step2 + arr.reduce((accum,current,index)=>{
        return index % 2 !== 0 ? accum + current : accum
    },0)


    return step3 % 10 !== 0 ? 10 - step3 % 10 : 0
}

function verifyCode(code){
    const numeberArray = code.toString().split("").map(Number) 
    //acima, transforma o numero em uma array de string e com
    // o  map(number), transforma todos itens do array em numeros

    const numTen = numeberArray.slice(0,-1)

    const correct = generateDigit(numTen)

    console.log(correct)
    return correct === numeberArray[11]

}

verifyCode(547020743789);