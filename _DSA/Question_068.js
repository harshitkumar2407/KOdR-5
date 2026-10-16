let str = "FsdDFSfdsFdsfds";
let toggle = "";
for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if (ascii >= 97 && ascii <= 122) {
        toggle += String.fromCharCode(ascii - 32);
    } else if (ascii >= 65 && ascii <= 90) {
        toggle += String.fromCharCode(ascii + 32);
    } else {
        toggle += str[i];
    }
}
console.log(toggle);