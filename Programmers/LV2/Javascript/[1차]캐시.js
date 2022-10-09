function solution(cacheSize, cities) {
    const HIT = 1, MISS = 5;
    
    if(cacheSize == 0) return MISS * cities.length;
    
    let answer = 0, 
        cache = [];
    
    cities.forEach(city => {
        city = city.toLowerCase();
        
        if(cache.indexOf(city) != -1){
            cache.splice(cache.indexOf(city), 1);
            answer += HIT;
        }else{
            if(cache.length >= cacheSize) cache.shift();
            answer += MISS;
        }
        
        cache.push(city);
    });
    
    return answer;
}