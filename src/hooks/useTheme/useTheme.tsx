/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from 'react';
import type { useThemeProps } from './types';
import styles from './styles/theme.module.css';


export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );

  useEffect(() => {
    const body = document.body;
    body.classList.remove(styles.light, styles.dark);
    body.classList.add(styles[theme]);
  }, [theme]);

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  return {
    theme,
    toggleTheme,
  }
}

export function ThemeProps(props: useThemeProps) {
  return { props }
}