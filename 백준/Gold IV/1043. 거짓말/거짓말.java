import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main {

    static int N, M;
    static int[] parents, partyZZang;
    static int trueCnt, start, ans;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        parents = new int[N + 1];
        partyZZang = new int[M];

        for(int i = 1; i <= N; i++) {
            parents[i] = i;
        }

        st = new StringTokenizer(br.readLine());
        trueCnt = Integer.parseInt(st.nextToken());

        if(trueCnt > 0) {

            start = Integer.parseInt(st.nextToken());

            for(int i = 1; i < trueCnt; i++) {

                int next = Integer.parseInt(st.nextToken());

                union(start, next);

            }
        }

        for(int i = 0; i < M; i++) {

            st = new StringTokenizer(br.readLine());

            int memberCnt = Integer.parseInt(st.nextToken());
            int tmpStart = Integer.parseInt(st.nextToken());

            for(int j = 1; j < memberCnt; j++) {

                union(tmpStart, Integer.parseInt(st.nextToken()));

            }

            partyZZang[i] = find(tmpStart);
        }

        countParty();
        System.out.println(ans);

    }

    static void countParty() {

        int zzang = find(start);

        for(int i = 0; i < M; i++) {

            if(find(partyZZang[i]) != zzang) {
                ans++;
            }
        }
    }

    static void union(int a, int b) {

        int pA = find(a);
        int pB = find(b);

        if(pA == pB) return;

        if(pA < pB) {
            parents[pB] = pA;
        } else {
            parents[pA] = pB;
        }

    }

    static int find(int x) {

        if(parents[x] == x) return x;

        return find(parents[x]);
    }
}
