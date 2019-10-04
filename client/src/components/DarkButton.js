import React from 'react';
import useDarkMode from '../hooks/useDarkMode.js';

/* Creating Dark Mode Button */
function DarkButton() {
    const [dark1, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!dark1);
    };
    return (
        <div>
            <button
                onClick={toggleMode}
                className={dark1 ? 'toggle toggled' : 'toggle'}
            >Click Here For Dark Mode</button>
        </div>
        /* Insert Header title? */
    )
}

export default DarkButton;