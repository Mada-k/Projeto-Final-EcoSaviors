function lindinhaF1() {
  var fase1 = prompt("Escolha entre as opções 1 ou 2");
  if (fase1 == 1) {
    alert(
      "Você acertou! Parabéns, a lâmpada LED possui 50.000 horas de duração e não possuem Mercúrio na sua composição, além de economizar 50% a 80% de energia"
    );
    location.replace("index2.html");
  } else if (fase1 == 2) {
    alert(
      "Você errou! Lâmpadas fluorescentes contêm substâncias químicas que afetam o ser humano, como o Mercúrio, um metal pesado que uma vez ingerido ou inalado, causa efeitos desastrosos ao sistema nervoso"
    );
    location.replace("index5.html");
  } else {
    alert("Digite 1 ou 2");
    lindinhaF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
  }
}

function lindinhaF2() {
  var fase2 = prompt("Escolha entre as opções 1 ou 2");
  if (fase2 == 2) {
    alert(
      "Você acertou! A descontaminação das lâmpadas descartadas podem ser feitas por uma empresa especializada em tratamento de resíduos mercuriais"
    );
    location.replace("index3.html");
  } else if (fase2 == 1) {
    alert(
      "Você errou! Ao romper-se, uma lâmpada fluorescente emite vapores de mercúrio que são absorvidos pelos organismos vivos, contaminando-os; se forem lançadas em aterro as lâmpadas contaminam o solo e, mais tarde, os cursos d’água, chegando à cadeia alimentar"
    );
    location.replace("index5.html");
  } else {
    alert("Digite 1 ou 2");
    lindinhaF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
  }
}

function lindinhaF3() {
  var fase3 = prompt("Escolha entre as opções 1 ou 2");
  if (fase3 == 2) {
    alert(
      "Parabéns Lindinha, você se tornou uma EcoSaviors. Quando você mantêm a luz desligada aumenta sua vida útil, além de economizar energia naturalmente diminuindo o consumo excessivo de água."
    );
    location.replace("index4.html");
  } else if (fase3 == 1) {
    alert(
      "Você não se tornou um EcoSaviors, preste atenção pois suas escolhas afetam a saúde do meio ambiente. Se deixar as luzes acesas você aumento o pico de energia e o consumo de água do planeta "
    );
    location.replace("index5.html");
  } else {
    alert("Digite 1 ou 2");
    lindinhaF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
  }
}

function inicioPagina() {
  location.replace("../index.html");
}
