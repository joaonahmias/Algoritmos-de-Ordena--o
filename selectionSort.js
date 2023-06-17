function selectionSort(vetor){
    let i,j,indiceMinimo
    for(i=0;i<vetor.length;i++){
        indiceMinimo=i
        for(j=i;j<vetor.length;j++){
            if(vetor[indiceMinimo]>vetor[j]){
                indiceMinimo=j
            }
        }

        if(i!=indiceMinimo){
           [vetor[i], vetor[indiceMinimo]] = [vetor[indiceMinimo], vetor[i]]
        }
    }

    return vetor;
}

export default selectionSort