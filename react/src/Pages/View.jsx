import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const View = () => {
    const [song, setSong] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/songs")
            .then((response) => setSong(response.data.message))
            .catch((error) => console.error("Error fetching data", error));
    }, []);

    return (
        <div>
            {song}
            <Link to="/">Go back to dashboard</Link>
        </div>
    );
};

export default View;
