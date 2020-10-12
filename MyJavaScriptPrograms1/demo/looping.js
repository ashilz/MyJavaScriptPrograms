//var i = 0;
//while (i < 10) {
//console.log(i)
//i++;
//}

//var num = 50
//var i = 1;
//total = 0;
//while (i < = num) {
//total += i;
//i++;
//}

//console.log(total)




// function fact(n) {
//     res = 1;
//     if (n == 0 || n = 1) {
//         return res
//     } else {
//         for (var i = n; i >= 1; i--) {
//             res = res * i;
//         }
//         return res
//     }
// }
// n = 4;
// res = fact(n)
// console.log(res)






// for (let i = 1; i < 10, i++) {
//     console.log(i);
// }


// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }

// var num = [10, 20, 30, 40, 50]
// console.log(num[0]);
// console.log(num[1]);

// num[0] = 100;

// for (item of num) {
//     console.log(item)
// }




//method of adding a number in an array





var arr = [10, 20, 30, 40, 50];
var ele = 40;
var flg = 0;
for (item of arr) {
    if (item == ele) {
        flg += 1;
        break
    } else {
        flg = 0
    }
}
if (flg > 0) {
    console.log("element found")
} else {
    console.log("element not found")
}