const person ={
    name:"Harshit",
    age:22,
    city:"Delhi"
}
for (const key in person) {
    if (!Object.hasOwn(person, key)) continue;
    
    const element = person[key];
    console.log(element);
    
}