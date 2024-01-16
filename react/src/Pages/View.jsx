import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

const View = () => {
    const [songs, setSongs] = useState([]);
    const [delMessage, setDelMessage] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    const [updateMsg, setUpdateMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/songs")
            .then((response) => {
                setSongs(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setIsLoading(false);
            });
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

    const viewSong = (songId) => {
        axios
            .get(`http://localhost:8000/api/songs/${songId}`)
            .then((response) => console.log(response.data))
            .catch((error) =>
                console.error("error retrieving song data.", error)
            );
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-center text-slate-800 text-4xl my-4">
                    Songs List
                </p>{" "}
                {isLoading ? (
                    <h1 className="font-bold text-center text-slate-800 text-2xl my-4">
                        Loading song data...
                    </h1>
                ) : (
                    <div>
                        <Link
                            className="flex justify-center items-center"
                            to="/"
                        >
                            <Button
                                border={"border-green-600"}
                                name="Go back to dashboard"
                                bg={"green"}
                                color={"white"}
                            ></Button>
                        </Link>

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
                                <div className="flex justify-between items-center gap-4 ">
                                    <div className="p-4">
                                        <p>Title: {song.title}</p>
                                        <p>Artist: {song.artist}</p>
                                        <p>Album: {song.album}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => deleteSong(song.id)}
                                            className="border border-red-600  py-2 my-2 px-4 hover:text-white rounded-xl hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                        <Link to="/update">
                                            <button className="border border-green-600  py-2 my-2 px-4 hover:text-white rounded-xl hover:bg-green-600 transition">
                                                Update
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default View;
