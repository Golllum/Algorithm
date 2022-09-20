function solution(participant, completion) {
    // Hash Algorithm : Key & Value
    let map = new Map();
    
    // 참가자들 이름을 key 값으로 하고 해당 이름이 몇 명인지를 value 값으로 하여 map을 set한다.
    participant.map(e => {
        map.set(e, (map.get(e) || 0) + 1);
    });
    
    // 완주자들 리스트를 반복문으로 돌려서 map에서 빼준다. value가 0이 되면 map에서 delete한다.
    completion.map(e => {
        ( map.get(e) - 1 ) > 0 ? map.set(e, map.get(e) - 1) : map.delete(e); 
    });
    
    // 완주하지 못한 선수는 무조건 1명이므로 iterator 반복문을 돌릴 필요가 없다.
    return map.keys().next().value;
    
    /* reference
    const map = new Map();
    
    for(let i=0; i<participant.length; i++){
        let a = participant[i],
            b = completion[i];
        
        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }
    
    for(let [k, v] of map){
        if(v > 0) return k;
    }
    
    return 'nothing';
    */
}