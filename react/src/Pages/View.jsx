import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

const View = () => {
    const [songs, setSongs] = useState([]);
    const [delMessage, setDelMessage] = useState("");
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/songs")
            .then((response) => setSongs(response.data))
            .catch((error) => console.error("Error fetching data", error));
    }, []);

    const deleteSong = (songId) => {
        axios
            .delete(`http://localhost:8000/api/songs/${songId}`)
            .then((response) => {
                console.log(response.data);
                setDelMessage("Song Deleted Successfully.");
                setSongs(songs.map((song) => song.id !== songId));
            });
    };

    return (
        <div>
            {delMessage && (
                <h1
                    onClick={() => {
                        setIsHidden(true);
                    }}
                    className={`text-red-500 text-center p-5 cursor-pointer ${
                        isHidden ? "hidden" : ""
                    } `}
                >
                    {delMessage}
                </h1>
            )}
            {songs.map((song) => (
                <div
                    className="border border-slate-800 rounded-md py-2 px-6 m-3"
                    key={song.id}
                >
                    <p>Title: {song.title}</p>
                    <p>Artist: {song.artist}</p>
                    <p>Album: {song.album}</p>
                    <button
                        onClick={() => deleteSong(song.id)}
                        className="border border-red-600  py-2 my-2 px-4 font-bold hover:text-white rounded-xl hover:bg-red-600 transition"
                    >
                        X
                    </button>
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
