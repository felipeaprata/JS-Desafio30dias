function maiorLetra(str){
    let texto = str.toLowerCase().split('').sort();
 

    return texto[str.length-1];

}


console.log(maiorLetra("Lorem ipsum dolore sec avanti"));
console.log(maiorLetra("Hello"));
console.log(maiorLetra("May the force be with you"));
console.log(maiorLetra("Its over nine thousand"));