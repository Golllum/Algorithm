function solution(brown, yellow) {
    let answer = [];
    let sum = brown + yellow;
    
    for(let y=3; y<=sum/y; y++){
        if(sum % y == 0){
            let x = parseInt(sum/y);
            if((x-2) * (y-2) == yellow){
                answer = [x, y];
                break;
            }
        }
    }
    
    return answer;
}