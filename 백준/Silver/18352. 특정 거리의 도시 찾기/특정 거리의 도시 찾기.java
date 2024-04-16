import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {

    static int N, M, K, X;
    static List<ArrayList<Integer>> list = new ArrayList<>();
    static int[] isVisited;
    static List<Integer> ansList = new ArrayList<>();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        X = Integer.parseInt(st.nextToken());

        for(int i = 0; i <= N; i++) {
            list.add(new ArrayList<>());
        }

        for(int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());

            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            list.get(a).add(b);
        }

        isVisited = new int[N + 1];
        Arrays.fill(isVisited, -1);

        bfs(X);

        if (ansList.size() == 0) {
            System.out.print(-1);
            return;
        }

        Collections.sort(ansList);
        StringBuilder sb = new StringBuilder();

        for(int x : ansList) {
            sb.append(x).append("\n");
        }

        System.out.print(sb);
    }

    static void bfs(int start) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(start);
        isVisited[start] = 0;

        while(!q.isEmpty()) {

            int now = q.poll();

            if(isVisited[now] == K) {
                ansList.add(now);
            }

            if(isVisited[now] > K) return;

            for(int next : list.get(now)) {
                if(isVisited[next] == -1) {
                    q.offer(next);
                    isVisited[next] = isVisited[now] + 1;
                }
            }
        }
    }

}