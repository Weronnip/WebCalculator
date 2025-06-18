import styles from './styles/header_custom.module.css';
import { ThemeSwitcher } from "../../theme_switcher/theme_switcher";

export function HeaderCustom() {
    return (
        <>
            <header className={styles.container}>
                <span className={styles.title}>
                    Calculator
                </span>

                <nav className={styles.nav_item}>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <a className={styles.link}
                                href="https://github.com/Weronnip/"
                                target="_blank">
                                Source
                            </a>
                        </li>
                        <li className={styles.item}>
                            <ThemeSwitcher style_icon={styles.icon} font_size={styles.bth}/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}