// import React, { useCallback, useMemo, useState } from 'react'
// import Home from './components/Home'
// import About from './components/About'


// const App = () => {

//   const [count, setCount] = useState(0)

//   let greet = useCallback(() =>{
//     console.log("GOod morning");
//   },[])

//   useMemo(()=> greet(),[])

//   return (
//     <div>
//       <h1>Count {count}</h1>
//       <button onClick={()=> setCount((p) => p+1)}>inc</button>
//       <Home  greet={greet}/>
//       <About/>
//     </div>
//   )
// }

// export default App

import { memo, useMemo, useState } from "react";

const ProductList = memo(function ProductList({ products }) {
  console.log("ProductList rendered");

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
});

function App() {
  const [search, setSearch] = useState("");
  // const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Mouse" },
  ];

  const filteredProducts = useMemo(() => {
    console.log("Filtering products");

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products"
      />
{/*
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button> */}

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
