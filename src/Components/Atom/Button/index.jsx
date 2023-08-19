import React from "react";

function Button({className, content}) {
    return (
        <button type="button" className={className}>{content}</button>
    );
};

export default Button;