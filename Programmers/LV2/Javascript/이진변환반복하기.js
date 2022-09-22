function solution(s) {
    let convertCnt = 0;
    let removedZero = 0;
    
    while(true){
        if(s.length === 1){
            break;
        }
        
        let beforeLength = s.length;
        
        s = s.replaceAll('0', '');
        
        let afterLength = s.length;
        
        removedZero += beforeLength - afterLength;
        
        s = s.length.toString(2);
        convertCnt ++;
    }    
    
    return [convertCnt, removedZero];

    /* reference : regExp
    function solution(s) {
        var answer = [0,0];
        while(s.length > 1) {
            answer[0]++;
            answer[1] += (s.match(/0/g)||[]).length;
            s = s.replace(/0/g, '').length.toString(2);
        }
        return answer;
    }
    */
}