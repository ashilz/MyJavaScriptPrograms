var String = "HHHHPP5DAAA"
var count = {}
for (ch in str) {
    if (ch in count) {
        count[ch] += 1;
    } else {
        count[ch] = 1;
    }
}
var output = ""
for (key in count) {
    output = output + count[key] + key
}
console.log(output)