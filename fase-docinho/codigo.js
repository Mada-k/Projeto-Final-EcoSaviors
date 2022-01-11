function docinhoF1 (){
    var fase1 = prompt("Escolha entre as opções 1 ou 2");
    if (fase1 == 2) {
        alert ("Você acertou! Parabéns Docinho, serviços de armazenamento de arquivos online, como Dropbox, OneDrive e Box são ótimos. Incorporá-los ao dia-a-dia garante que muito espaço físico que seria dedicado a guardar folhas e mais folhas de papel seja liberado para usos mais estratégicos e funcionais.");
        location.replace("indexD2.html");
    } else if (fase1 == 1) {
        alert ("Errado! O uso de papel cresceu mais de 400% em todo o mundo nos últimos 40 anos. A consequência disso é o derrubamento em massa de árvores e mais árvores, e esse desmatamento causado para produzir papel é um grande ameaça para o meio ambiente.");
        location.replace("indexD5.html");
    } else {
        alert ("Digite 1 ou 2");
        docinhoF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
    }

}

function docinhoF2 (){
    var fase2 = prompt("Escolha entre as opções 1 ou 2");
    if (fase2 == 1 ) {
        alert ("Você acertou! Parabéns, um dos principais objetivos da reciclagem são reaproveitar os materiais descartados, reduzir a produção de lixo e aumentar a preservação dos recursos naturais");
        location.replace("indexD3.html");
    } else if (fase2 == 2) {
        alert ("Seja mais consciente. Sabia que o papel levado do lixo pelos coletores, são misturados com outros tipos de lixo, como restos de alimentos e enterrados em aterros sanitários? Eles não se desmancham por serem biodegradáveis, sendo aterrados, não respiram e assim demoram muito pra se decompôr.");
        location.replace("indexD5.html");
    } else {
        alert ("Digite 1 ou 2");
       docinhoF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
    }

}

function docinhoF3 (){
    var fase3 = prompt("Escolha entre as opções 1 ou 2");
    if (fase3 == 2 ) {
        alert ("Parabéns, Docinho você se tornou uma EcoSaviors. Essa é uma das formas de preservar o meio ambiente, deixando de imprimir tickets, extratos bancários, tudo que requer papel e que possa ser feito online, opte por isso você estará reduzindo o desmatamento e contribuindo para um futuro mais abundante");
        location.replace("indexD4.html");
    } else if (fase3 == 1) {
        alert ("Preste atenção, suas escolhas mesmo que pequenas afetam o futuro do Planeta. No Brasil o consumo de papel chega a 200 milhões de folhas. Isso equivale a 400 mil resmas, quase 20 mil árvores, uma resma de papel consome 3,5 kg de gás carbônico (CO²), que consome de 50 a 60 eucaliptos e 100 mil litros de água e 5 mil Kw/h de energia. Repense!" );
        location.replace("indexD5.html");
    } else {
        alert ("Digite 1 ou 2");
        docinhoF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
    }

}

function inicioPagina (){
    location.replace("../index.html"); 
}