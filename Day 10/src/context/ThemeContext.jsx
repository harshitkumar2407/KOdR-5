import { createContext, useState } from "react";

export const Ui_Theme = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        bg:"bg-red-200",
        text:"text-red-900"
    });
    function ChangeTheme() {
        let bg_color_list = ["bg-black-100"]
        let text_color_list = ["text-green-200"]
        setTheme(()=> theme.bg=bg_color_list[0],theme.text=text_color_list[0] )
    }
    return (
        <Ui_Theme.Provider value={{ theme, setTheme,ChangeTheme }}>
            {children}
        </Ui_Theme.Provider>
    );
};