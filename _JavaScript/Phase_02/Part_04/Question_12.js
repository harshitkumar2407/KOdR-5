const salaries ={
    john:1000,
    alex:2000,
    bob:1500
}

let totalSalary = 0

for (const key in salaries) {
    if (!Object.hasOwn(salaries, key)) continue;
    totalSalary += salaries[key]
    
}
console.log(salaries,totalSalary);
