let h1 = document.createElement('h1')
h1.textContent = "hello"
document.body.append(h1)

let rh1 = React.createElement("div",{},
                React.createElement("h1",{},"loream ispsum"),
                React.createElement("p",{},"loream ispsum")
)

let realDomElement = document.querySelector("#root")

let VertualDomElement = ReactDOM.createRoot(realDomElement)

VertualDomElement.render(rh1)
console.log(h1);
console.log(rh1);
// console.log(React);


