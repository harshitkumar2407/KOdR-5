import { createContext, useContext, useState } from "react";


export let MyStore = createContext()

export const ContextProvider =  ({children}) =>{
    const [theme, setTheme] = useState(false)
    const [cart, setCart] = useState([])

    return(
        <MyStore.Provider value={{theme,setTheme,setCart,cart}}> 
            {children}
        </MyStore.Provider>
    )
}