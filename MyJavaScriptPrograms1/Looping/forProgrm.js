var num = Number(prompt("enter a number: "))
flag = 0

for (i = 2; i < num - 1; i++) {
    if (num % i == 0) {
        flag = 1
        break
    }
}

if (flag > 0) {
    console.log(num + " is not prime")
} else {
    console(num + " is prime")
}