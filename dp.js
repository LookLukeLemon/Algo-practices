


const solution = (n, m, k) => {
    let answer ='';
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

    const check = (a, z)  => {
		if(a == 0 || z == 0) return 1;
		if(dp[a-1][z-1] != 0) return dp[a-1][z-1];
		
		return dp[a-1][z-1]= Math.min(check(a-1, z)+check(a, z-1), 1000000001);
	}
	
    const gen = (a, z, k)  => {
		if(a==0) {
			for(let i=0; i<z; i++)
            answer += ")";
			return;
		}
		if(z==0) {
			for(let i=0; i<a; i++)
            answer += "(";
			return;
		}
		
		const checkLength= check(a-1, z);

		if(k>checkLength) {
			answer += ")";
			gen(a, z-1, k-checkLength);
		}else {
			answer += "(";
			gen(a-1, z, k);
		}
	}

    if(check(n, m)< k) {
        return ''
    }else {
        gen(n, m, k);
        return answer;
    }

}

 const result = solution(2,2,7)
 console.log(result)