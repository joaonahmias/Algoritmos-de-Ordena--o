function bubbleSort(vetor){
    let i,j
    for(i=0;i<vetor.length;i++){
        for(j=0;j<vetor.length-1-i;j++){
            if(vetor[j]>=vetor[j+1]){
                [vetor[j],vetor[j+1]] = [vetor[j+1],vetor[j]]
            }
        }
    }
    return vetor
}

export default bubbleSort