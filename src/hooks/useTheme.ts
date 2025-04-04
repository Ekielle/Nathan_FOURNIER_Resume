import { useContext } from "react";
import ThemeContext from "../provider/ThemeContext";

const useTheme = () => {
    const themeContext = useContext(ThemeContext)
    if (!themeContext) {
        throw new Error("ThemeSwitcher must be used within a ThemeProvider")
    }

    return { ...themeContext }
}

export default useTheme;