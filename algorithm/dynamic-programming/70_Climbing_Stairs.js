
// 時間複雜度沒有過
var climbStairs = function(n) {
    let solitions = 0;
    let queue = [0];

    for(let i = 0; i < n; i++) {
        console.log('level:', i, 'queue:', queue);

        let newQueue = [];
        while(queue.length > 0) {
            let val = queue.shift();
            let left = val + 1;
            let right = val + 2;
            if (left < n) {
                newQueue.push(left);
            }
            if (right < n) {
                newQueue.push(right);
            }

            if (left === n) solitions++;
            if (right === n) solitions++;
        }

        queue = newQueue;
        // solitions += newQueue.filter((v) => v === n).length;
        // console.log('queue:', queue);
    }

    return solitions;
};


//                     0
//            1                  2
//      2         3         3       4
//    3    4   4     5   4   5   5.  6
// 4


// ===================================

// 最佳解
var climbStairs = function(n) { 

    let queue = [];
    queue[0] = 1;
    queue[1] = 1;
    queue[2] = 2;

    for (let i = 3; i < n; i++) {
        queue[i] = queue[i - 1] + queue[i - 2];
    }

    return queue[n];
}

//                 0   
//         1               2       
//     2        3        3       4 
//   3   4   4     5
// 4

// 用 recursion 的方式來做
var climbStairs = function(n) {
    var climb = function(s) {
        if (s <= 2) {
            return s;
        }
        return climb(s - 1) + climb(s - 2);
    }   


    return climb(n);
};
