import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewSong = () => {
    const { id } = useParams();
    const [song, setSong] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [delMessage, setDelMessage] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/songs/${id}`)
            .then((response) => {
                setSong(response.data);
                setSuccessMessage("Successfully retrieved data.");
            })
            .catch((error) => {
                console.error("Error catching data fix the code Ivan!.", error);
                setSuccessMessage("Error retrieving data.");
            });
    }, [id]);

    const deleteSong = () => {
        axios
            .delete(`http://localhost:8000/api/songs/${id}`)
            .then((response) => {
                console.log(response.data);
                setDelMessage("Song Deleted Successfully.");
            })
            .catch((error) => console.error("Error fetching data", error));
        setDelMessage("Error Deleting Song.");
    };

    return (
        <>
            <div className="h-dvh my-12">
                {song ? (
                    <>
                        <div className="flex justify-center items-start bg-white shadow-md flex-col gap-4 rounded-md p-5 my-4">
                            <h1 className="text-center text-3xl font-semibold">
                                {" "}
                                Song details{" "}
                            </h1>
                            <div>
                                <h1>ID: {song.id}</h1>
                                <h1>Title: {song.title}</h1>
                                <p>Artist: {song.artist}</p>
                                <p>Album: {song.album}</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div>
                                <Link to={"/"}>
                                    <button className="py-2 bg-white shadow-md px-4 rounded-sm border border-slate-700 hover:bg-slate-700 hover:text-white transition">
                                        Home
                                    </button>
                                </Link>
                            </div>
                            <div className="py-2 px-4 rounded-sm bg-white shadow-md border border-slate-700 hover:bg-slate-700 hover:text-white transition">
                                <Link to={`/update/${song.id}`}>
                                    <button>Update</button>
                                </Link>
                            </div>
                            <button
                                onClick={deleteSong}
                                className="py-2 px-4 rounded-sm border bg-white shadow-sm border-slate-700 hover:bg-slate-700 hover:text-white transition"
                            >
                                Delete
                            </button>
                        </div>
                    </>
                ) : (
                    successMessage
                )}
            </div>
        </>
    );
};

export default ViewSong;
