//print number b\ w low to uper

low = Number(prompt("enter low: "))
upp = Number(prompt("enter upper limit: "))


var evensum = 0
var oddsum = 0
for (i = low; i <= upp; i++) {
    if (i % 2 == 0) {
        evensum += i;
    } else {
        oddsum += i;
    }

}


console.log("sum of even numbers: " + evensum);
console.log("sum of odd numbers: " + oddsum)