// Button.js
import React from 'react';
const Button = ({ text, color }) => {
    const handleClick = () => {    
        console.log('Кнопка була натиснута!');
        };

    return (
        <button
        onClick={handleClick}
        style={{ backgroundColor: color, padding: '10px 20px', border: 'none',
        borderRadius: '5px', color: '#fff' }}
        >
        {text}
        </button>
    );
};
export default Button;