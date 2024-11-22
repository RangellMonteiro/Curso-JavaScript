somar(10);
function somar(limite){
    let multiplosDe3 = 0;
    let multiploDe5 =0;
    for(i = 0; i <= limite; i++){
        if(i% 3 === 0)
            multiplosDe3 += i;
        if(i % 5 === 0)
            multiploDe5 += i;
    }
    console.log(multiplosDe3 + multiploDe5);
}