/* eslint-disable react-refresh/only-export-components */
import type { useThemeProps } from '../../hooks/useTheme/types';
import { useTheme, ThemeProps } from '../../hooks/useTheme/useTheme';
import { createContext, useContext, type ReactNode } from 'react';

const useThemeProps = ThemeProps;
const ThemeContext = createContext<useThemeProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode}) {
    const { theme, toggleTheme } = useTheme();

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
         throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}