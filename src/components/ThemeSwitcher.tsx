import { Button } from "primereact/button";
import useTheme from "../hooks/useTheme";
import { ThemeMode } from "../provider/ThemeContext";

const ThemeSwitcher : React.FC = () => {
    
    const { themeMode, toggleTheme } = useTheme();

    return (
        <Button label={themeMode === ThemeMode.Light ? "Dark Theme" : "Light Theme"} icon={themeMode === ThemeMode.Light ? "pi pi-moon" : "pi pi-sun"} className="p-button-secondary" onClick={() => toggleTheme()} style={{ marginRight: '0.5rem' }} />
    )
}


export default ThemeSwitcher;