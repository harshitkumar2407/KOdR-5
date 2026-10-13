import { createContext, useState } from "react";

export const UserInfo = createContext();

export const ContextProvider = ({ children }) => {
    const data = "true";
    const [user, setUser] = useState({name:"",email:"",password:""})
    const [toggle, setToggle] = useState(true)
    return <UserInfo.Provider value={{ data,user,setUser,toggle, setToggle }}>
        {children}
        </UserInfo.Provider>;
};