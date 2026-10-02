const main = document.querySelector("main")
const form = document.querySelector("form")

let UserArr = [{name:"harshit",email:"harshitkumar@2408" ,URL:"https://plus.unsplash.com/premium_photo-1784206714400-4201cb1fe50e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]

// main.innerHTML = `<div class="user_card">
//             <div class="img">
//                 <img src="https://images.unsplash.com/photo-1789440783428-84ba516387c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
//             </div>
//             <div class="textArea">
//                 <h1>name</h1>
//                 <p>name@gmail.com</p>
//             </div>
//             <div class="btns">
//                 <button>Update</button>
//                 <button id="delBtn">Delete</button>
//             </div>
//         </div>`

form.addEventListener("submit",(e) =>{
    e.preventDefault()
    let id = Date.now()
    let name = e.target[0].value
    let email = e.target[1].value
    let URL = e.target[2].value

    let obj = {id,name,email,URL}
    console.log(e.target[0].value);
    UserArr.push(obj) // 
    console.log(obj);
    
    render()
})

let render = () =>{
    main.innerHTML = ""
    UserArr.forEach((val,index)=>{
        console.log("form foreach",val);
        main.innerHTML +=  `<div class="user_card">
            <div class="img">
                <img src="${val.URL}" alt="">
            </div>
            <div class="textArea">
                <h1>${val.name}</h1>
                <p>${val.email}</p>
            </div>
            <div class="btns">
                <button>Update</button>
                <button id="delBtn" onclick="deleteUser(${val.id})">Delete</button>
            </div>
        </div>`
        
    })
    form.reset()
}
        render()
let deleteUser = (id) =>{
    UserArr = UserArr.filter((val) => val.id !== id )
    render()
}