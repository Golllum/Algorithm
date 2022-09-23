// 프린터 Refactoring version
function solution(priorities, location) {
    let printCnt = 0;
    let mainQueue = [];
    
    mainQueue = priorities.map((e, i) => ({
        prior: e,
        myDoc: i === location
    }));
    
    while(mainQueue.length){        
        let paper = mainQueue.shift();
        
        if(mainQueue.some(e => e.prior > paper.prior)){
            mainQueue.push(paper);
        }else{
            printCnt++;
            if(paper.myDoc){
                return printCnt;
            }
        }
    }
}