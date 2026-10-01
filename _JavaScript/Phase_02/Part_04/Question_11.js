const marks = {
    Anubhav:95,
    Rahul:82,
    Aman:90
}
let max = -1
let maxName = ""

for (const key in marks) {
    if (max < marks[key]) {
        max = marks[key]
        maxName = key
    }
}
console.log(max,maxName);

