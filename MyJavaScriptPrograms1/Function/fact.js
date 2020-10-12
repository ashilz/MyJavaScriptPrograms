function fact(n) {
    res = 1;
    if ((n == 0 || n == 1)) {
        return res
    } else {
        for (var i = n; i >= 1; i--) {
            res = res * i;
        }
        return res
    }
}
n = Number(prompt("enter the number"));
res = fact(n)
console.log(res)