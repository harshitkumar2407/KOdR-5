function StudentMarksCalculator(arr) {
    let max = arr[0]
    let low = arr[0]
    let sum = 0


    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) 
            max = arr[i]
        if (low > arr[i]) 
            low = arr[i]
        sum += arr[i]    
    }
    
    console.log("Highest Marks: ",max);
    console.log("Lowest Marks : ",low);
    console.log("Average Marks: ",(sum/arr.length));
    console.log('Total Marks  : ',sum);
    
    
    
    
}

let arr1 = [50,60,70,80,90]

StudentMarksCalculator(arr1)
