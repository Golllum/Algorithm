function solution(begin, target, words) {
    if(!words.includes(target))
        return 0;
    
    let queue = [{value: begin, cnt: 0}];
    let visit = new Array(words.length).fill(false);
    
    while(queue){
        let curPos = queue.shift();
        
        for(let i=0; i<words.length; i++){
            if(!visit[i] && checkDiffCnt(curPos.value, words[i])){
                if(words[i] === target)
                    return ++curPos.cnt;
                
                queue.push({value: words[i], cnt: (curPos.cnt + 1)});
                visit[i] = true;
            }
        }
    }
}

function checkDiffCnt(base, word){
    let diffCnt = 0;
    
    for(let i=0; i<base.length; i++){
        if(base.charAt(i) !== word.charAt(i)){
            diffCnt++;
        }
        
        if(diffCnt > 1){
            return false;
        }
    }
    
    return true;
}