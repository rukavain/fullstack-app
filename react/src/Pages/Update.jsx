import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Update = () => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [updateMsg, setUpdateMsg] = useState("");
    const [isHidden, setIsHidden] = useState(false);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleArtistChange = (e) => setArtist(e.target.value);
    const handleAlbumChange = (e) => setAlbum(e.target.value);

    const updateSong = (songId) => {
        axios
            .put(`http://localhost:8000/api/songs/${songId}`)
            .then((response) => {
                console.log(response.data);
                setUpdateMsg("Successfully updated song.");
                setIsLoading(false);
            })
            .catch((error) =>
                console.error("Error blah blah fix the code man.", error)
            );
        setUpdateMsg("Error updating song. Please try again.");
    };

    return (
        <>
            <div className="flex flex-col justify-center items-start">
                <h1 className="my-4 text-2xl ">Update song</h1>
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
                        onClick={updateSong}
                    >
                        Add song
                    </button>

                    <Link to="/">
                        <button className="text-center py-2 px-6 my-2 rounded-md border-2 border-slate-800 hover:bg-slate-800 hover:text-white font-bold transition">
                            Go back to dashboard
                        </button>
                    </Link>
                </form>
                {updateMsg && (
                    <button
                        onClick={() => {
                            setIsHidden(true);
                        }}
                        className={`py-2 px-7 text-slate-800 my-4 rounded-md border border-green-600 hover:bg-green-600 hover:text-white transition ${
                            isHidden && `hidden`
                        }`}
                    >
                        {updateMsg}
                    </button>
                )}
            </div>
        </>
    );
};

export default Update;
