function separa(n){
    // let total = n.toString();
    // let texto = total.split("");
    let texto = n.toString().split("");


    let resul = texto.map((item)=>{
        return item*item;
    });
    resul = resul.join("");

    console.log(resul);
}




separa(3514);
separa(94571);
separa(24);
separa(745821698);