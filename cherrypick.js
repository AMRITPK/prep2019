 function testing(g) {
        //DP[x1][y1][x2]
        let l = g.length;
        let dp = new Array(l+1).fill(new Array(l+1).fill(new Array(l+1).fill(-Infinity)));
        console.log(dp);
        //to avoid i - 1 < 0, use minvalue to handle the edhe cases.
        //use dp[i][j][m] to rep max val when p1 at g[i-1][j-1], p2 at g[m-1][i + j - m - 1]
        console.log("----------");
        dp[1][1][1] = g[0][0]; // init start point;
        for(let i = 1; i <= l; i++){
            for(let j = 1; j <= l; j++){
                for(let m = 1; m <= l; m++){
                    let n = i + j - m;
                    if (n > l || n < 1 || g[i-1][j-1] == -1 || g[m-1][n-1] == -1 || dp[i][j][m] > 0){
                        continue;
                    } 
                    //4 prev cases: p1 was left, was up X p2, was up, was left; 
                    let curr = Math.max(Math.max(dp[i-1][j][m], dp[i][j - 1][m]), Math.max(dp[i-1][j][m-1], dp[i][j-1][m-1]));
                    if (curr < 0) continue;  // do not forget this: when prev points not accessible;
                    curr += g[i-1][j-1];
                    if (m != i) curr += g[m-1][n-1];
                    dp[i][j][m] = curr;
                }
            }
        }
        
        return dp[l][l][l] < 0 ? 0 : dp[l][l][l];
    }

    console.log(testing([[0,1,-1],[1,0,-1],[1,1,1]]));