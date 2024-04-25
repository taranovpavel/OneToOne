import React from 'react';
const Button = ({onclick,inner,size= "medium"}) => {
    return (
        <button onClick={onclick} className={size}>
            <p>{inner}</p>
        </button>
    );
};

export default Button;