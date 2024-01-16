import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/create">
                        <li className="border border-slate-800 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-white text-center my-2 transition cursor-pointer">
                            Add
                        </li>
                    </Link>
                    <Link to="/view">
                        <li className="border border-slate-800 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-white text-center my-2 transition cursor-pointer">
                            View
                        </li>
                    </Link>
                </ul>
            </nav>
        </>
    );
};

export default Home;
