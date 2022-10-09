function solution(str1, str2) {
    let AnBcnt = 0;
    let AuBcnt = 0;
    
    // 알파벳 두 글자씩 자름
    let A = tokenizer(str1);
    let B = tokenizer(str2);
    
    A.forEach(a_element => {
        // A의 원소값과 같은 값을 가진 B의 원소가 있다면
        // 교집합수(AnBcnt) 증가시키고, 해당 B원소값을 대문자로 변경
        // 대문자로 변경한 값은 합집합 생성 시, 제외시킨다
        let findIdx = B.indexOf(a_element);
        
        if(findIdx > -1){
            B[findIdx] = B[findIdx].toUpperCase();
            AnBcnt++;
        }
    });
    
    AuBcnt = [...A, ...B].filter(e => e.match(/^[a-z]+$/)).length;

    return A.length === 0 && B.length === 0 ? 65536 : Math.floor((AnBcnt / AuBcnt) * 65536);
}

function tokenizer(text){
    let result = [];
    
    for(let i=0; i<text.length-1; i++){
        let token = text.substring(i, i+2).toLowerCase();
        
        // 소문자 알파벳으로만 구성된 token만 push
        if(token.match(/^[a-z]+$/)){
            result.push(token);
        }
    }
    
    return result;
}