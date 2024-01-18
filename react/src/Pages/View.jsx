import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button.jsx";

const View = () => {
    const { id } = useParams();
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
                setSongs(songs.filter((song) => song.id !== songId));
            });
    };

    const viewSong = () => {
        useEffect(() => {
            axios
                .get(`http://localhost:8000/api/songs/${id}`)
                .then((response) =>
                    console.log("Successfully retrieved data.", response.data)
                )
                .error((error) =>
                    console.error(
                        "Check if you have XAMPP open or you have php artisan serve running."
                    )
                );
        }, [id]);
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
                                className={`flex flex-row-reverse my-6 cursor-default justify-center items-center text-red-500 text-center p-5 border py-2 px-6 border-red-700`}
                            >
                                <h1
                                    onClick={() => setDelMessage("")}
                                    className="py-1 px-4 rounded-sm border hover:bg-red-700 hover:text-white transition border-red-700 mx-5 cursor-pointer"
                                >
                                    X
                                </h1>
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
                                        <Link to={`/update/${song.id}`}>
                                            <button className="border border-green-600  py-2 my-2 px-4 hover:text-white rounded-xl hover:bg-green-600 transition">
                                                Update
                                            </button>
                                        </Link>
                                        <Link to={`/viewsong/${song.id}`}>
                                            <button className="border border-green-600  py-2 my-2 px-4 hover:text-white rounded-xl hover:bg-green-600 transition">
                                                View
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
