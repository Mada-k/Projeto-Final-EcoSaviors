function florzinhaF1 (){
    var fase1 = prompt("Escolha entre as opções 1 ou 2");
    if (fase1 == 1 ) {
        alert ("Você acertou! Parabéns, usá-las como saquinhos de lixo é uma das formas de previnir, mas compre sua própria sacola ou um carrinho de sacolão para evitar de vez o consumo");
        location.replace("indexF2.html");
    } else if (fase1 == 2) {
        alert ("Você errou! Repense sua escolha, 80% do lixo encontrado nos oceanos é plástico e a sua sacola está entre eles.");
        location.replace("indexF5.html");
    } else {
        alert ("Digite 1 ou 2");
        florzinhaF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
    }

}

function florzinhaF2 (){
    var fase2 = prompt("Escolha entre as opções 1 ou 2");
    if (fase2 == 2 ) {
        alert ("Você acertou! Tem várias formas de reutilizar garrafas pet, uma delas é fazer vasos auto irrigáveis. Esse tipo de vaso mantém a água necessária para as plantas  dentro da garrafa, sem que mosquitos tenham acesso a ela. Assim as plantas ficam irrigadas por mais tempo e não se tornam potenciais criadouros para larvas.");
        location.replace("indexF3.html");
    } else if (fase2 == 1) {
        alert ("Você errou! 80% dos lixos no oceano são de plástico a sua garrafa pet pode estar lá");
        location.replace("indexF5.html");
    } else {
        alert ("Digite 1 ou 2");
        florzinhaF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
    }

}

function florzinhaF3 (){
    var fase3 = prompt("Escolha entre as opções 1 ou 2");
    if (fase3 == 2 ) {
        alert ("Parabéns Florzinha, você se tornou uma EcoSaviors. O meio ambiente agradece sua contribuição, quando você faz compostagem com alimentos como frutas, verduras e legumes você contribui para a destinação final correta dos alimentos e pode ter uma linda horta ou jardim na sua casa. Podem estar estragados mas sem exageros. ");
        location.replace("indexF4.html");
    } else if (fase3 == 1) {
        alert ("Você perdeu, repense suas atitudes Florzinha, elas impactam diretamente na saúde da natureza. Infelizmente não se tornou uma EcoSaviors.");
        location.replace("indexF5.html");
    } else {
        alert ("Digite 1 ou 2");
        florzinhaF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
    }

}

function inicioPagina (){
    location.replace("../index.html"); 
}