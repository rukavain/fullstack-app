import React from "react";

const Button = ({ name, border, bg, color, grow }) => {
    return (
        <button
            className={`flex py-2 px-6 m-2 rounded-md border-2 ${border} hover:bg-${bg}-600 hover:text-white transition font-semibold ${grow}`}
        >
            {name}
        </button>
    );
};

export default Button;
