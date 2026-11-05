// console.log("hello world")
// const a=10;
// const ans = a;

import { Button } from "./componet/Button.js";

// ans=10;
console.log("hello world");

// function run() {
//     // let a=10;

// }
// run();

const root  = document.getElementById("root") as HTMLElement;

if (!root) {
    throw new Error("Parent Root doesn't exists");
}

function exicute(){
    const btn = new Button()

    btn.mount(root)
    btn.unmount(root)
    btn.mount(root)
    btn.mount(root)
}

exicute()
