function quickSort(vetor,inferior,superior){

    if(inferior<superior){
        let posPivo,i,j
        let pivo = vetor[superior]
        i = inferior-1

        for(let j=inferior;j<superior;j++){
            if(vetor[j]<=pivo){
                i++
                [vetor[j], vetor[i]] = [vetor[i], vetor[j]]
            }
        }

        i++
        [vetor[i], vetor[superior]] = [vetor[superior], vetor[i]]
        posPivo = i

        console.log("Esquerda: " + vetor + " Inferior: " + inferior + " Superior: " + (posPivo - 1))
        quickSort(vetor,inferior,posPivo-1)
        console.log("Direita: " + vetor + " Inferior: " + (posPivo+1) + " Superior: " + superior)
        quickSort(vetor,posPivo+1,superior)

        return vetor
    }
}

export default quickSort

