dd = Number(prompt("Enter the dob date: "))
dm = Number(prompt("Enter the dob month: "))
dy = Number(prompt("Enter the dob year: "))

alert("DOB:" + dd + "-" + dm + "-" + dy)

cd = Number(prompt("Enter the current date: "))
cm = Number(prompt("Enter the current month: "))
cy = Number(prompt("Enter the current year: "))

age = (cy - dy) - 1
age1 = dm - cm
age2 = cm - dm
age3 = cy - dy

if ((age <= 1) && (cm < dm)) {
    age1 = ((12 - dm) + cm)
    alert(age1 + "months older baby")
} else if ((age >= 1) && (cm < dm)) {
    age1 = ((12 - dm) + cm)
    print("Age is: " + age + "year and " + age1 + "months older")
} else if ((age >= 1) & (cm > dm)) {
    print("Age is: " + age3 + "year and " + age2 + "months older")

} else {
    print("Age is: " + age + "years old")
}