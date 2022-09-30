function solution(s){
    if(s[0] === ')' || s[s.length-1] === '('){
        return false;
    }
    
    let answer = 0;
    
    // for..of 사용시 효율성 테스트 통과 X
    // answer++ 사용시 효율성 테스트 통과 X
    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
            answer += 1;
        }else{
            answer -= 1;
        }
        
        if(answer < 0){
            return false;
        }
    }
    
    return answer === 0;
}