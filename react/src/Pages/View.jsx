import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const View = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/songs")
            .then((response) => setSongs(response.data))
            .catch((error) => console.error("Error fetching data", error));
    }, []);

    return (
        <div>
            {songs.map((song) => (
                <div key={song.id}>
                    <p>Title: {song.title}</p>
                    <p>Artist: {song.Artist}</p>
                    <p>Album: {song.album}</p>
                </div>
            ))}
            <Link to="/">Go back to dashboard</Link>
        </div>
    );
};

export default View;
