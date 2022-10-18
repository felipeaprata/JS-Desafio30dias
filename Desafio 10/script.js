function fatorando(num){
    const bigNum = BigInt(num);
    if(bigNum === 0n){
        return 1n;
    }else{
        return (bigNum * (fatorando(bigNum-1n)));
    }

}


console.log(fatorando(5));
console.log(fatorando(0));
console.log(fatorando(32));
console.log(fatorando(9));