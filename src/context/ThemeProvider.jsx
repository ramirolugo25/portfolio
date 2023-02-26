import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(false)

    const onHandleTheme = () => {
        setDarkTheme(!darkTheme);
    }

    useEffect(() => {
        if (darkTheme) {
            document.body.style.backgroundColor = '#212529';
        } else {
            document.body.style.backgroundColor = 'white';
        }
    }, [darkTheme])

    return (
        <ThemeContext.Provider value={{ darkTheme, onHandleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}