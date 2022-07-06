let competidores = [ "Rafael", "Manoel", "Daniel"];

function position(arrayCompetidores){

//método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

    let recolocacao = arrayCompetidores.splice();
    
    if(arrayCompetidores[0] != 'Daniel'){
        for(let i = 0; i < arrayCompetidores.length; i++){
            if(arrayCompetidores[i] == 'Daniel'){
                recolocacao = arrayCompetidores.splice(i-1, 0, arrayCompetidores.splice(i,1)[0]);
                return console.log('Este é o pódio: ' + arrayCompetidores);
            }
        }
    
    }
    else{
        return console.log("Daniel é o vencedor!")
    }
}
console.log(position(competidores));

//Retorna: Este é o pódio: Rafael,Daniel,Manoel