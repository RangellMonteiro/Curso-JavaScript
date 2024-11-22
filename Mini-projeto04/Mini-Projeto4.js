verificarVelocidade(180);

function verificarVelocidade(velocidade){
    const limiteVelocidade = 70;
    const pontosPorExcesso = 5;
    const limitePontos = 12;

    if(velocidade <= limiteVelocidade){
        console.log("Velocidade compatível com a via, tenha uma boa viagem!");
    }else{
        const pontos = Math.floor((velocidade - limiteVelocidade) / pontosPorExcesso);
        if(pontos>limitePontos){
            console.log('Carteira suspensa!');
        }else {
            console.log(pontos);
        }
    }
}