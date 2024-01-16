import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

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
                <div
                    className="border border-slate-800 rounded-md py-2 px-6 m-3"
                    key={song.id}
                >
                    <p>Title: {song.title}</p>
                    <p>Artist: {song.artist}</p>
                    <p>Album: {song.album}</p>
                </div>
            ))}
            <Link to="/">
                <Button
                    border={"border-green-600"}
                    name="Go back to dashboard"
                    bg={"green"}
                    color={"white"}
                ></Button>
            </Link>
        </div>
    );
};

export default View;
