function solution(s){
    var answer = true;
    
    // 첫번째 솔루션 (forEach)
    // array.from OR ... operator -> array 변환 -> foreach p, y 갯수 count    
    let input = Array.from(s.toString().toLowerCase());
    let pCnt1 = 0;
    let yCnt1 = 0;
    
    input.forEach((e) => {
        if(e === 'p'){
            pCnt1++;
        }else if(e === 'y'){
            yCnt1++;
        }
    });
    
    if(pCnt1 === yCnt1){
        answer = true;
    }else{
        answer = false;
    }
    
    // 두번째 솔루션 (정규식)
    // string.match() + regExp -> p, y count
    let pCnt2 = ( s.toString().match(/p/gi) || [] ).length;
    let yCnt2 = ( s.toString().match(/y/gi) || [] ).length;
    
    if(pCnt2 === yCnt2){
        answer = true;
    }else{
        answer = false;
    }
    
    return answer;
}