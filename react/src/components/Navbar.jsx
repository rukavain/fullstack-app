import React from "react";
import { useState } from "react";
const Navbar = () => {
    const navLinks = [
        { label: "Home" },
        { label: "Services" },
        { label: "About" },
        { label: "Contact" },
    ];

    return (
        <>
            <nav className=" flex justify-center items-center bg-white  px-8 py-4 shadow-md">
                <div className="flex justify-around items-center min-w-[90vw] max-w-7xl">
                    <div>
                        <h1 className="font-bold text-4xl">FSA</h1>
                    </div>
                    <div className="max-md:hidden">
                        <ul className="flex gap-12">
                            {navLinks.map((elem) => (
                                <li className=""> {elem.label} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
