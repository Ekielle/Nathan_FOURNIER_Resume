import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import ThemeContext, { IThemeContext, ThemeMode } from "./ThemeContext";
import { PrimeReactContext } from "primereact/api";

const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const primeReactContext = useContext(PrimeReactContext);
    const { changeTheme } = primeReactContext || {};
    if (!changeTheme) {
        throw new Error("useTheme must be used within a PrimeReactProvider");
    }

    const themeLink = useRef<HTMLLinkElement>(null);
    const [activeTheme, setActiveTheme] = useState<ThemeMode>(ThemeMode.Light);

    const contextValue: IThemeContext = {
        themeMode: activeTheme,
        toggleTheme: () => {
            const newTheme = activeTheme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
            changeTheme(activeTheme, newTheme, themeLink.current?.id);
            setActiveTheme(newTheme);
        },
    };

    useEffect(() => {
        themeLink.current = document.getElementById("theme-link") as HTMLLinkElement;
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            changeTheme(activeTheme, ThemeMode.Dark, themeLink.current?.id);
            setActiveTheme(ThemeMode.Dark);
        } else {
            changeTheme(activeTheme, ThemeMode.Light, themeLink.current?.id);
            setActiveTheme(ThemeMode.Light);
        }
    }, []);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;