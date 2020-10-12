num1 = Number(prompt("enter the num1:"))
num2 = Number(prompt("enter the num2:"))
num3 = Number(prompt("enter the num3:"))


if (num1 == num2) {
    if (num2 == num3) {
        alert("all numbers are equal")
    }
} else if (num1 > num2 > num3) {
    alert(num2 + "is the second largest")
} else if (num1 > num3 < num2) {
    alert(num3 + " is the second largest")
} else {
    alert(num1 + " is the second largest")
}