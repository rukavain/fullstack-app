import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const View = () => {
    const [song, setSong] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/songs")
            .then((response) => setSong(response.data.message))
            .catch((error) => console.error("Error fetching data", error));
    }, []);

    return <div>{song}</div>;
};

export default View;
