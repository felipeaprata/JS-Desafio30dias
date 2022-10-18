function moedas(){
    const dinheiro = [
        {'1': 20},
        {'5': 10},
        {'10': 0},
        {'25': 0},
        {'100': 0},
        {'500': 0}
    ] 

}


//Resultado

function coins(num){
    const coins = {
        '1': 0,
        '5': 0,
        '10': 0,
        '25': 0,
        '100': 0,
        '500': 0
    }

    let rest = num;

    coins['500'] = Math.floor(rest / 500)
    rest -= 500 * Math.floor(rest / 500) // resul = 478 - 500 *0 === 478

    coins['100'] = Math.floor(rest / 100)
    rest -= 100 * Math.floor(rest / 100)// resul = 478 - 100 *4 === 78
    
    coins['25'] = Math.floor(rest / 25)
    rest -= 25 * Math.floor(rest / 25)// resul = 78 - 25 *3 === 3

    coins['10'] = Math.floor(rest / 10)
    rest -= 10 * Math.floor(rest / 10)// resul = 3 - 10 *0 === 3

    coins['5'] = Math.floor(rest / 5)
    rest -= 5 * Math.floor(rest / 5)// resul = 3 - 5 *0 === 78

    coins['1'] = Math.floor(rest / 1)
    rest -= 1 * Math.floor(rest / 1)// resul = 3 - 1 * 3 === 0

    return coins;
}


console.log(coins(478));
console.log(coins(384));
console.log(coins(5412));
console.log(coins(50));