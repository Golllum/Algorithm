function solution(n, words) {
    let answer = [0, 0];
    let useWord = new Set();
    
    for(let i=0; i<words.length; i++){
        if(i !== 0){
            if(useWord.has(words[i]) || words[i-1].charAt(words[i-1].length-1) !== words[i].charAt(0)){
                let number = (i+1) % n === 0 ? n : (i+1) % n;
                let order = (i+1) % n === 0 ? ((i+1) / n) : parseInt((i+1) / n) + 1;
                
                answer = [number, order];
                break;
            }
        }
        
        useWord.add(words[i]);
    }

    return answer;
}