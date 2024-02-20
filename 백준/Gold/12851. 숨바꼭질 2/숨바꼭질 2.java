import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {

    static int subin, sister, min, cnt;
    static int[] isVisited = new int[200001];
    static final int INF = 200001;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        subin = Integer.parseInt(st.nextToken());
        sister = Integer.parseInt(st.nextToken());
        min = Integer.MAX_VALUE;
        Arrays.fill(isVisited, -1);

        bfs();

        System.out.println(min);
        System.out.println(cnt);
    }

    static void bfs() {
        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.offer(new Node(subin, 0));
        isVisited[subin] = 0;

        boolean isExist = false;

        while (!pq.isEmpty()) {

            Node node = pq.poll();

            if (node.dist > min) return;

            if (node.value == sister) {
                if (!isExist) {
                    isExist = true;
                    min = node.dist;
                    cnt = 1;
                } else {
                    if (node.dist == min) {
                        cnt++;
                    }
                }
                continue;
            }

            if (node.value < sister) {
                if (isVisited[node.value * 2] != -1) {
                    if (node.dist == isVisited[node.value * 2] - 1) {
                        pq.offer(new Node(node.value * 2, node.dist + 1));
                    }
                } else {
                    isVisited[node.value * 2] = node.dist + 1;
                    pq.offer(new Node(node.value * 2, node.dist + 1));
                }
            }
            if (node.value < sister) {
                if (isVisited[node.value + 1] != -1) {
                    if (node.dist == isVisited[node.value + 1] - 1) {
                        pq.offer(new Node(node.value + 1, node.dist + 1));
                    }
                } else {
                    isVisited[node.value + 1] = node.dist + 1;
                    pq.offer(new Node(node.value + 1, node.dist + 1));
                }
            }
            if (node.value - 1 >= 0) {
                if (isVisited[node.value - 1] != -1) {
                    if (node.dist == isVisited[node.value - 1] - 1) {
                        pq.offer(new Node(node.value - 1, node.dist + 1));
                    }
                } else {
                    isVisited[node.value - 1] = node.dist + 1;
                    pq.offer(new Node(node.value - 1, node.dist + 1));
                }
            }
        }
    }

    static class Node implements Comparable<Node> {
        int value, dist;

        Node(int value, int dist) {
            this.value = value;
            this.dist = dist;
        }

        @Override
        public int compareTo(Node o) {
            return this.dist - o.dist;
        }
    }
}
