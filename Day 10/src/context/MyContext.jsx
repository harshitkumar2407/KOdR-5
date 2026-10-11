import { createContext } from "react";
import { useState } from "react";




export let MyStore = createContext()

export const ContextProvider = ({children}) => {
    let data = "true"
    // return <MyStore.Provider value={data}>
    return <MyStore.Provider value={{data}}>
        {children}
    </MyStore.Provider>
}