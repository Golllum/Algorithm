function solution(A, B) {    
    var answer = 0;
    
    let sortedA = [...A].sort((a, b) => a - b);
    let sortedB = [...B].sort((a, b) => a - b);
    
    if(sortedA[0] >= sortedB[sortedB.length-1]){
        return answer;
    }else if(sortedA[sortedA.length-1] < sortedB[0]){
        return sortedB.length;
    }
    
    let Apos = 0;
    let Bpos = 0;
    
    while(Bpos < sortedB.length){
        if(sortedA[Apos] < sortedB[Bpos]){
            answer++;
            Apos++;
            Bpos++;
        }else{
            Bpos++;
        }
    }
    
    return answer;
}