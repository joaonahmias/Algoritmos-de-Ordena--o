function margeSort(vetor){

    if(vetor.length>1){
        let metade = Math.floor(vetor.length/2)

        let esquerda = vetor.slice(0,metade)
        let direita = vetor.slice(metade,vetor.length)

        console.log("esquerda: "+esquerda+" Direita: "+direita);
        return marge(margeSort(esquerda),margeSort(direita))
    }
    else{
        return vetor
    }
    

}

function marge(esquerda,direita){
    let indiceEsquerda =0
    let indiceDireita=0
    let resultante =[]

    while( indiceEsquerda<esquerda.length&&indiceDireita<direita.length){
        if(esquerda[indiceEsquerda]<direita[indiceDireita]){
            resultante.push(esquerda[indiceEsquerda])
            indiceEsquerda++
        }
        else{
            resultante.push(direita[indiceDireita])
            indiceDireita++
        }
    }

    while( indiceEsquerda<esquerda.length){
        
        resultante.push(esquerda[indiceEsquerda])
        indiceEsquerda++
    
        
    }

    while( indiceEsquerda<esquerda.length&&indiceDireita<direita.length){
        
        resultante.push(direita[indiceDireita])
        indiceDireita++
        
    }
    
    return resultante
}

export default margeSort