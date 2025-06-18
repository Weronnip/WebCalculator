
## Документация

Веб-калькулятор — преимущества, которые даёт созданное веб-приложение: кроссплатформенность, удобство поддержки и лёгкое масштабирование в будущем.







## Технический стек
Для разработки данного приложения использовались следующие технологии:

**Клиент:** React, CSS module,

React — был выбран из-за своих преимуществ и удобства в разработке: переиспользование компонентов, создание собственных пользовательских хуков, а также за счёт большого количества встроенных хуков, таких как `useState` — для установки состояния.

CSS Modules — выбран за возможность использовать CSS-классы изолированно от остальных, что предотвращает конфликты между схожими классами.

Bun - выбран за его высокую производительность, а также встроенная поддержка TypeScript.
## Установка и запуск

1. Для установки и запуска проекта потребуется менеджер пакетов `bun`. Для начала необходимо установить сам пакетный менеджер.
2. Клонируйте проект при помощи команды: 
```bash 
   git clone git@github.com:Weronnip/calculator_test_task.git 
```
3. После клонирования проекта выполните следующие команды для установки зависимостей и перехода в папку проекта:
```bash
  bun install
  cd calculator_test_task
```
4. Команды для запуска проекта:
```bash
    # Запуск в режиме разработчика: bun dev
    # Сборка проекта: bun build
    # Запуск в режиме продакшен: bun preview
```
## Разбор пользовательских хуков:

- useButton
- useKeyboard
- useTheme

#### useButton
`useButton` - создание пользовательских кнопок.

Метод `CustomButton` отвечает за создание кнопки. При использовании свойств (props) можно назначить событие на клик и применить пользовательский стиль в месте, где вызывается `CustomButton `

Пример вызова:
```
<CustomButton action_button="0" OnClick={handleClick} style_bth={styles.other_bth}/>
```
Описание свойств:
  - action_button — передаёт символ, который будет отображён на кнопке.

  - OnClick — функция-обработчик, возвращающая символ, установленный на кнопку.

  - style_bth — передаёт стили кнопке из контекста вызова.

#### useKeyboard
`useKeyboard` - хук, отвечающий за логику клавиатуры, включая ввод с физической клавиатуры.

Пример вызова `useKeyboard`:
```
const { handleClick, inputValue } = useKeyboard();

<div className={styles.display_input}>
  {inputValue}
</div>

<CustomButton action_button="AC" OnClick={handleClick} style_bth={styles.other_bth}/>

```

Описание свойств:
  - handleClick — отвечает за основную логику вычислений и обработку ввода.
  - inputValue — отвечает за вывод значений на экран.


#### useTheme
`useTheme` - хук, отвечающий за смену темы клиента. Работает через контекст, чтобы обеспечить применение темы на всём клиенте.

Пример вызова `useTheme` в контексте:
```
const useThemeProps = ThemeProps; // присваивание типов из useTheme
const ThemeContext = createContext<useThemeProps | undefined>(undefined); // Создание контекста с типами из useTheme

const { theme, toggleTheme } = useTheme();


<ThemeContext.Provider value={{ theme, toggleTheme }> // Передача методов в значения для вызова этих методов
  {children} // Обертка всего проекта
</ThemeContext.Provider>
```

Методы из `useTheme` передаются в контекст, чтобы применять тему в любом месте приложения

Ниже написаны переменные CSS:
```
.dark {
    --bg-color: #121212;
    --text-color: #ffeded;
    --bg-color-bth: #838383;
    --text-color-bth: #121212;
    --bg-color-header:#c9d5ab;
    --text-color-header: #262626;
  }
  
  .light {
    --bg-color: #E8F1FF;
    --text-color: #121212;
    --bg-color-bth: #121212;
    --text-color-bth: #383838;
    --bg-color-header:#859267;
    --text-color-header: #E8F1FF;

  }
```

Вызов контекста:
```
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

    { theme === "light" ? <DarkTheme /> : <LightTheme /> }
```

Вызов тернарного оператора для смены темы: `{ theme === "light" ? <DarkTheme /> : <LightTheme /> }`

Описание методов `useTheme`:
 - theme - отвечает за определение текущей темы.
 - toggleTheme - переключает тему при нажатии на кнопку, где вызывается `toggleTheme`.
## Authors

- GitHub[@Weronnip](https://www.github.com/Weronnip)
- Telegam [@weronnip](https://t.me/weronnip)

