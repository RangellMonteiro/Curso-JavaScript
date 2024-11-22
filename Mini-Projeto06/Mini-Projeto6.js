const filme = {
    titulo: 'Jurassic Park',
    ano : 1993,
    diretor: 'Steven Spielberg',
    personagem : 'Alan Grant'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}