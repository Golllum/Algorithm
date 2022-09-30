// DP 활용한 풀이
class Solution{
    public int solution(int m, int n, int[][] puddles) {
        int answer = 0;
        
        int[][] dp = new int[n][m];
        for(int[] puddle : puddles){
            dp[puddle[1] - 1][puddle[0] - 1] = -1;
        }
        
        dp[0][0] = 1;
        
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                if(dp[i][j] != -1){
                    if(i > 0 && dp[i-1][j] != -1){
                        dp[i][j] += dp[i-1][j];
                    }
                    if(j > 0 && dp[i][j-1] != -1){
                        dp[i][j] += dp[i][j-1];
                    }
                }
                if(dp[i][j] > 1000000007){
                    dp[i][j] %= 1000000007;
                }
            }
        }
        
        answer = dp[n-1][m-1];
        
        return answer;
    }
}

// BFS 활용한 풀이
// ( DFS로 목적지까지 가면서 거치는 구역에 +1을 계속 더해주는 방식으로도 해결 가능할듯 )
/*
import java.util.*;

class Solution {
    class Pos{
        public int x;
        public int y;
        public int cnt;
        
        Pos(int x, int y){
            this.x = x;
            this.y = y;
            this.cnt = 0;
        }
        
        Pos(int x, int y, int cnt){
            this.x = x;
            this.y = y;
            this.cnt = cnt;
        }
    }
    public int solution(int m, int n, int[][] puddles) {
        int answer = 0;
        int minPath = 0;
        boolean[][] map = new boolean[n+1][m+1];
        // visit 배열을 활용해야 될 것 같은데..?
        
        for(int i=0; i<puddles.length; i++){
            int[] pos = puddles[i];
            map[pos[1]][pos[0]] = true;
        }
        
        Queue<Pos> q = new LinkedList<>();
        q.add(new Pos(1,1));
            
        int[] moveX = {1, 0};
        int[] moveY = {0, 1};
        
        while(!q.isEmpty()){
            Pos p = q.poll();
            
            if(p.x == m && p.y == n){
                if(minPath == 0){
                    minPath = p.cnt;
                    answer++;
                }else{
                    if(minPath == p.cnt){
                        answer++;
                    }
                }
                
                continue;
            }
            
            for(int i=0; i<2; i++){
                int newX = p.x + moveX[i];
                int newY = p.y + moveY[i];
                
                if(newX >= map[0].length || newY >= map.length){
                    continue;
                }
                
                if(!map[newY][newX]){
                    // 물에 잠겨있지 않았다면
                    q.add(new Pos(newX, newY, (p.cnt+1)%1000000007));
                }
            }
        }
        
        return (answer%1000000007);
    }
}
*/