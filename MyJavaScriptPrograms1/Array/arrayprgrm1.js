arr = [];
sum = 0;
var limit = Number(prompt("enter the limit: "))


for (i = 0; i < limit; i++) {
    arr.push(Number(prompt("enter the elements: "))); //aar.push is to append the elements in the array
}


for (i of arr) {
    sum += i;
}

alert(sum)