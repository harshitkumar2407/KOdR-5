// Question: Return the first character whose second occurrence appears while scanning left to
// right.
    let s = "my name is harshit"
    let set =new Set()
    for(let i =0;i < s.length;i++){
        if(set.has(s[i])){
            return s[i]
        }
        set.add(s[i])
    }