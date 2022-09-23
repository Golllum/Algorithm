function solution(priorities, location) {
    var printCnt = 0;
    
    let mainQueue = [];
    let tempQueue = [];
    
    mainQueue = priorities.map((e, i) => {
        return i === location ? {prior: e, myDoc: true} : {prior: e, myDoc: false};
    });
    
    // forEach, some 등은 break문을 사용할 수 없음
    while(mainQueue.length){        
        let paper = mainQueue.shift();
        
        for(let i=0; i<mainQueue.length-1; i++){
            // 우선순위가 더 높은 인쇄물이 있다면, 현재 인쇄물을 tempQueue에 넣는다.
            if(paper.prior < mainQueue[i].prior){
                tempQueue.push(paper);
                break;
            }
        }
        
        // tempQueue에 현재 인쇄물이 넘어가지 않았다면, 현재 인쇄물을 인쇄한다.
        if(!tempQueue.includes(paper)){
            // 인쇄 진행 -> printCnt ++
            printCnt++;
            if(paper.myDoc){
                // 만약 내 인쇄물이라면 인쇄를 중단하고 현재까지 인쇄된 인쇄물 수를 출력한다.
                break;
            }else{
                // 내 인쇄물이 아니라면 tempQueue에 있는 인쇄물들을 mainQueue로 다시 옮기고 tempQueue를 비운다.
                mainQueue = [...mainQueue, ...tempQueue];
                tempQueue.length = 0;
            }
        }
    }
    
    return printCnt;
}