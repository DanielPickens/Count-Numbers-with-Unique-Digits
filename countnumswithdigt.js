var countNumbersWithUniqueDigits = function(n) {
     let dp = [9];
        const temp = [9];
        let x =9;
        temp[0]=0;
        temp[1]=9;
        for(let i =2;i<9;i++){
            temp[i]=x*temp[i-1];
            x--;
        }
        
        dp[0]=1;
        
        for(let i =1; i< n+1;i++){
            dp[i] = dp[i-1]+temp[i];
        }
        return dp[n];
    }

/*
Success
Details 
Runtime: 117 ms, faster than 7.02% of JavaScript online submissions for Count Numbers with Unique Digits.
Memory Usage: 38.3 MB, less than 85.96% of JavaScript online submissions for Count Numbers with Unique Digits.
*/
