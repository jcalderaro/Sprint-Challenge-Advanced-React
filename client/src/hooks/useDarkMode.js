import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

/* Dark Mode From Homework */
const useDarkMode = () => {
    const [dark1, dark2] = useLocalStorage('darkmode', false);

    /* Create If / Else Toggle Logic */
    useEffect(() => {
        const body = window.document.body;
        if (dark1) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [dark1]);
    return [dark1, dark2];
};

export default useDarkMode;