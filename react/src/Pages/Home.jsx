import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav>
                <ul>
                    <li className="border border-slate-800 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-white text-center my-2 transition cursor-pointer">
                        <Link to="/create">Add</Link>
                    </li>
                    <li className="border border-slate-800 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-white text-center my-2 transition cursor-pointer">
                        <Link to="/view">View</Link>
                    </li>
                    <li className="border border-slate-800 px-6 py-2 rounded-md hover:bg-slate-800 hover:text-white text-center my-2 transition cursor-pointer">
                        <Link to="/update">Update</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Home;
