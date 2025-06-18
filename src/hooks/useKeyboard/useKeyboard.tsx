import Operator from './types';
import { useState, useEffect, useCallback } from "react";

export function useKeyboard() {
    const [inputValue, setInputValue] = useState<string>('0');
    const [isResultShown, setIsResultShown] = useState<boolean>(false);

    function isOperator(value: string): boolean {
        return Object.values(Operator).includes(value as Operator);
    }

    function formatNumber(value: string): string {
        if (value === 'Error' || value === '∞') return value;

        const [integer, decimal] = value.split('.');
        const formatted = parseInt(integer, 10).toLocaleString('ru-RU');
        return decimal ? `${formatted},${decimal}` : formatted;
    }

    const handleClick = useCallback(function handleClick(value: string) {
        if (inputValue === 'Error' && value !== 'AC') return;

        if (value === 'AC') {
            setInputValue('0');
            setIsResultShown(false);
            return;
        }

        if (value === '+/-') {
            if (inputValue.startsWith('-')) {
                setInputValue(inputValue.slice(1));
            } else {
                setInputValue(`-${inputValue}`);
            }
            return;
        }

        if (value === '=') {
            try {
                const replaced = inputValue.replace(/×/g, '*').replace(/÷/g, '/').replace(/\s/g, '').replace(/,/g, '.');
                const result = eval(replaced);

                if (!isFinite(result)) {
                    setInputValue('∞');
                } else {
                    setInputValue(formatNumber(String(result)));
                }

                setIsResultShown(true);
            } catch (e) {
                setInputValue('Error');
                setIsResultShown(false);
                console.error(e);
            }
            return;
        }

        if (value === '.' && inputValue.endsWith('.')) return;

        const plain = inputValue.replace(/\s/g, '');
        if (plain.length >= 20) return;

        if (inputValue === '0' && !isOperator(value) && value !== '.') {
            setInputValue(value);
        } else {
            setInputValue(prev => prev + value);
        }

        setIsResultShown(false);
    }, [inputValue]);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            const key = event.key;

            if (/^[0-9]$/.test(key)) {
                handleClick(key);
            } 
            else if (isOperator(key)) {
                const map: Record<string, string> = {
                    '+': '+',
                    '-': '-',
                    '*': '×',
                    '/': '÷',
                    '%': '%',
                };
                const operatorSymbol = map[key];
                if (operatorSymbol) {
                    handleClick(operatorSymbol);
                }
            }
            else if (key === 'Enter' || key === '=') {
                event.preventDefault();
                handleClick('=');
            }
            else if (key === 'Escape') {
                handleClick('AC');
            } 
            else if (key === 'Backspace') {
                setInputValue(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
                return;
            }
            else if (key === '.') {
                handleClick('.');
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleClick]);

    return { inputValue, isResultShown, handleClick };
}
