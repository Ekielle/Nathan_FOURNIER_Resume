import { createContext } from "react";

export enum ThemeMode {
    Light = "lara-light-indigo",
    Dark = "lara-dark-indigo",
}

export interface IThemeContext {
    themeMode: ThemeMode,
    toggleTheme: () => void;
};

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export default ThemeContext;