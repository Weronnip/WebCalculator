import styles from './styles/keyboard.module.css';
import { useButton } from "../../hooks/useButton/useButton"; 
import { useKeyboard } from "../../hooks/useKeyboard/useKeyboard";

export function CustomKeyboard() {
    const { CustomButton } = useButton();
    const { handleClick, inputValue } = useKeyboard();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.container}>
                    <div className={styles.display_input}>
                        {inputValue}
                    </div>

                    <div className={styles.container_keyboard}>
                        <div className={styles.row_one}>
                        <CustomButton action_button="AC" OnClick={handleClick} style_bth={styles.other_bth}/>
                        <CustomButton action_button="+/-" OnClick={handleClick} style_bth={styles.other_bth}/>
                        <CustomButton action_button="%" OnClick={handleClick} style_bth={styles.other_bth}/>
                        <CustomButton action_button="÷" OnClick={handleClick} style_bth={styles.operator}/>

                        <CustomButton action_button="7" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="8" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="9" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="×" OnClick={handleClick} style_bth={styles.operator}/>

                        <CustomButton action_button="4" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="5" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="6" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="-" OnClick={handleClick} style_bth={styles.operator}/>

                        <CustomButton action_button="1" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="2" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="3" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="+" OnClick={handleClick} style_bth={styles.operator}/>

                        <CustomButton action_button="0" OnClick={handleClick} style_bth={styles.custom_button}/>
                        <CustomButton action_button="." OnClick={handleClick} style_bth={styles.other_bth}/>
                        <CustomButton action_button="=" OnClick={handleClick} style_bth={styles.operator}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}