let prices = [100,250,399,499]

prices.forEach(i => {
    console.log(i);
});

let students = [
    {name:"Anubhav",marks : 85},
    {name:"Rahul",marks : 42},
    {name:"Aman",marks : 90},
]

students.forEach(i => {
    if (i.marks > 50) {
        console.log(i.name+" - Pass");
    }else{
        console.log(i.name+" - Fail");     
    }
});