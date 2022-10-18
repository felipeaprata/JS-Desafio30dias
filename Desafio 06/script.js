function teste(texto){
    const word = texto.toLowerCase().split(" ");
    const inverter = word.map((word)=>{
        return word.split('').reverse().join("");
    })

    return inverter;
}

console.log(teste("ola blz comovai"));