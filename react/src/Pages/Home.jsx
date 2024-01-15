import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Add</Link>
                    </li>
                    <li>
                        <Link to="/view">View</Link>
                    </li>
                    <li>
                        <Link to="/update">Update</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Home;
