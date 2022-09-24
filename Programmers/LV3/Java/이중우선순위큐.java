import java.util.*;

class Solution {
    public int[] solution(String[] operations) {
        int[] answer = { 0, 0 };

        PriorityQueue<Integer> priorQ = new PriorityQueue<>();
        PriorityQueue<Integer> reverseQ = new PriorityQueue<>(Collections.reverseOrder());

        for (String operation : operations) {
            String[] command = operation.split(" ");

            switch (command[0]) {
                case "I":
                    priorQ.add(Integer.parseInt(command[1]));
                    reverseQ.add(Integer.parseInt(command[1]));
                    break;
                case "D":
                    if (priorQ.size() > 0) {
                        if (command[1].equals("1")) {
                            int max = reverseQ.poll();
                            priorQ.remove(max);
                        } else if (command[1].equals("-1")) {
                            int min = priorQ.poll();
                            reverseQ.remove(min);
                        }
                    }
                    break;
            }
        }

        if (priorQ.size() > 0) {
            answer[0] = reverseQ.peek();
            answer[1] = priorQ.peek();
        }

        return answer;
    }
}