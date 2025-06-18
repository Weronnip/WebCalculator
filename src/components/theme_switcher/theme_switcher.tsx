import { CiDark, CiLight } from "react-icons/ci";
import styles from '../../hooks/useTheme/styles/theme.module.css';
import { useThemeContext } from "../../context/theme_context/theme_context";

export function ThemeSwitcher({ style_icon, font_size }: { style_icon?: string; font_size?: string }) {
    const { theme, toggleTheme } = useThemeContext();

    function DarkTheme() {
        return (
            <>
                <span style={{ color: '#262626', fontFamily: 'Comfortaa'}}>
                    dark theme <CiDark className={style_icon} />
                </span>
            </>
        )
    }

    function LightTheme() {
        return (
            <>
                <span style={{ color: '#fff', fontFamily: 'Comfortaa', fontSize: `${font_size}`}}>
                    light theme <CiLight className={style_icon} />
                </span>
            </>
        )
    }

    return (
        <>
            <button className={styles.theme_bth} onClick={toggleTheme}>
                { theme === "light" ? <DarkTheme /> : <LightTheme /> }
            </button>
        </>
    )
}