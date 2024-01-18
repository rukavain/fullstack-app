import React from "react";
import { Link } from "react-router-dom";
const Deleted = () => {
    return (
        <>
            <div>
                <h1>Successfully deleted song.</h1>
                <Link to="/">Go back to dashboard</Link>
            </div>
        </>
    );
};

export default Deleted;
