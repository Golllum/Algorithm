import java.util.Stack;

class Solution {
    boolean[] visited;

    public int solution(int n, int[][] computers) {
        int answer = 0;
        visited = new boolean[n];

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                answer++;
                dfs(i, computers);
            }
        }

        return answer;
    }

    public void dfs(int computer, int[][] computers) {
        Stack<Integer> stack = new Stack<>();
        stack.push(computer);
        visited[computer] = true;

        while (!stack.isEmpty()) {
            int nowComputer = stack.pop();
            int[] linked = computers[nowComputer];

            for (int i = 0; i < linked.length; i++) {
                if (linked[i] == 1 && !visited[i]) {
                    visited[i] = true;
                    stack.push(i);
                }
            }
        }
    }
}