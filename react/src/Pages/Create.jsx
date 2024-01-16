import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Create = () => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [addedMessage, setAddedMessage] = useState("");

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleArtistChange = (e) => setArtist(e.target.value);
    const handleAlbumChange = (e) => setAlbum(e.target.value);

    const handleAddSong = () => {
        const data = {
            title: title,
            artist: artist,
            album: album,
        };

        axios
            .post("http://localhost:8000/api/createsongs", data)
            .then((response) => {
                console.log(response.data);
                setAddedMessage("Successfully Added Song.");
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setAddedMessage("Error Adding Song. Please try again.");
            });
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <form className="flex flex-col border border-slate-800 rounded-md p-5 gap-4">
                    <div className="flex justify-center items-start gap-2 flex-col">
                        <label htmlFor="">Song Title</label>
                        <input
                            onChange={handleTitleChange}
                            value={title}
                            className="border border-slate-800 rounded-md p-2"
                            type="text"
                            required
                        />
                    </div>
                    <div className="flex justify-center items-start gap-2 flex-col">
                        <label htmlFor="">Song Artist</label>
                        <input
                            onChange={handleArtistChange}
                            value={artist}
                            type="text"
                            className="border border-slate-800 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex justify-center items-start gap-2 flex-col">
                        <label htmlFor="">Song Album</label>
                        <input
                            onChange={handleAlbumChange}
                            value={album}
                            type="text"
                            className="border border-slate-800 rounded-md p-2"
                            required
                        />
                    </div>
                    <button
                        type="button"
                        className="border border-green-600 rounded-md py-2 px-6 hover:text-white hover:bg-green-600 transition"
                        onClick={handleAddSong}
                    >
                        Add song
                    </button>

                    {addedMessage && (
                        <button
                            onClick={() => {
                                className = `hidden`;
                            }}
                            className="py-1 px-3 text-slate-800 my-2  rounded-md border-2 border-green-600 font-bold hover:bg-green-600 hover:text-white transition"
                        >
                            {addedMessage}
                        </button>
                    )}
                    <Link to="/">
                        <button className="text-center py-2 px-6 my-2 rounded-md border-2 border-slate-800 hover:bg-slate-800 hover:text-white font-bold transition">
                            Go back to dashboard
                        </button>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default Create;
