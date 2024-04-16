import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	static int N, budget, ans;
	static int[] region;
	public static void main(String[] args) throws Exception{
		input();
		binarySearch();
		System.out.println(ans);
	}

	static void input() throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		region = new int[N];
		StringTokenizer st = new StringTokenizer(br.readLine());
		for(int i = 0; i < N; i++){
			region[i] = Integer.parseInt(st.nextToken());
		}
		budget = Integer.parseInt(br.readLine());
		Arrays.sort(region);
	}

	static void binarySearch(){
		int start = 0;
		int end = region[N - 1];
		while(start <= end){
			int mid = (start + end) / 2;
			int tmp = 0;
			for(int i = 0; i < N; i++){
				if(region[i] <= mid){
					tmp += region[i];
				}else{
					tmp += mid;
				}
			}
			if(tmp <= budget){
				start = mid + 1;
				ans = Math.max(ans, mid);
			}else if(tmp > budget){
				end = mid - 1;
			}
		}
	}

}