export function useButton() {
    
    function CustomButton({ 
        action_button, 
        OnClick,
        style_bth, }: { 
        action_button: string; 
        OnClick: (value: string) => void;
        style_bth?: string}) {
        return (
            <>
                <button onClick={() =>OnClick(action_button)} className={style_bth}>
                    {action_button}
                </button>
            </>
        )
    }

    return {
        CustomButton,
    }
}