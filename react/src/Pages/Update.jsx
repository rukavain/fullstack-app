import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const [song, setSong] = useState({});
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [retrieveMessage, setRetrieveMessage] = useState("");
    const [updateMsg, setUpdateMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .put(`http://localhost:8000/api/songs/${id}`)
            .then((response) => {
                console.log("Retrieved data successfully.", response.data);
                setRetrieveMessage("Retrieved data successfully.");
                setSong(response.data);
                setTitle(response.data.title);
                setArtist(response.data.artist);
                setAlbum(response.data.album);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error retrieving data", error);
                setRetrieveMessage("Error retrieving data");
            });
    }, [id]);

    const handleUpdateSong = () => {
        const data = {
            title: title,
            artist: artist,
            album: album,
        };

        axios
            .put(`http://localhost:8000/api/songs/${id}`, data)
            .then((response) => {
                console.log("Successfully updated song", response.data);
                setUpdateMsg("Successfully updated song.");
            })
            .catch((error) => {
                console.error("Error updating message", error);
                setUpdateMsg("Error updating message");
            });
    };

    // const updateSong = (songId) => {
    //     const data = {
    //         title: title,
    //         artist: artist,
    //         album: album,
    //     };
    //     axios
    //         .put(`http://localhost:8000/api/songs/${songId}`, data)
    //         .then((response) => {
    //             console.log(response.data);
    //             setUpdateMsg("Successfully updated song.");
    //         })
    //         .catch((error) =>
    //             console.error("Error blah blah fix the code man.", error)
    //         );
    //     setUpdateMsg("Error updating song. Please try again.");
    // };

    return (
        <>
            <div className="flex flex-col justify-center items-start">
                <h1 className="my-4 text-2xl ">Update song</h1>
                <form className="flex flex-col border border-slate-800 rounded-md p-5 gap-4">
                    <div className="flex justify-center items-start gap-2 flex-col">
                        <label htmlFor="">Song Title</label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className="border border-slate-800 rounded-md p-2"
                            type="text"
                            required
                        />
                    </div>
                    <div className="flex justify-center items-start gap-2 flex-col">
                        <label htmlFor="">Song Artist</label>
                        <input
                            onChange={(e) => setArtist(e.target.value)}
                            value={artist}
                            type="text"
                            className="border border-slate-800 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex justify-center items-start gap-2 flex-col">
                        <label htmlFor="">Song Album</label>
                        <input
                            onChange={(e) => setAlbum(e.target.value)}
                            value={album}
                            type="text"
                            className="border border-slate-800 rounded-md p-2"
                            required
                        />
                    </div>
                    <button
                        type="button"
                        className="border border-green-600 rounded-md py-2 px-6 hover:text-white hover:bg-green-600 transition"
                        onClick={handleUpdateSong}
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
                        onClick={() => setUpdateMsg("")}
                        className={`py-2 px-7 text-slate-800 my-4 rounded-md border border-green-600 hover:bg-green-600 hover:text-white transition
                           `}
                    >
                        {updateMsg}
                    </button>
                )}
            </div>
        </>
    );
};

export default Update;
