arr = [];
odd = [];
even = [];
sum = 0;
var limit = Number(prompt("enter the limit: "))


for (i = 0; i < limit; i++) {
    arr.push(Number(prompt("enter element: ")));
}


for (i of arr) {
    if (i % 2 == 0) {
        even.push(i)
    } else {
        odd.push(i)
    }

}
console.log(odd)
console.log(even)