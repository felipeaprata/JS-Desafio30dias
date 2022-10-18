function nomeSobre(nome){
    let inteiro = nome.split(" ");
    let ultimo = inteiro[inteiro.length-1].toUpperCase();
    inteiro.pop();

    let todos = inteiro.map((item)=>{
        return item[0].toUpperCase() + "."
    })

    ultimo = ultimo +", " + todos.join(" ")

    return ultimo;
}


console.log(nomeSobre("Issac Larrubia Ferreira Pontes"))
console.log(nomeSobre("John Ronald Reuel Tolkien"))
console.log(nomeSobre("christopher james paolini"))
console.log(nomeSobre("Suzanne Marie Collins"))
