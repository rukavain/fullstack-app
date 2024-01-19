import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const View = () => {
    const { id } = useParams();
    const [songs, setSongs] = useState([]);
    const [delMessage, setDelMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/songs?page=${currentPage}`)
            .then((response) => {
                setSongs(response.data.data);
                setTotalPages(response.data.last_page);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setIsLoading(false);
            });
    }, [currentPage]);

    const deleteSong = (songId) => {
        axios
            .delete(`http://localhost:8000/api/songs/${songId}`)
            .then((response) => {
                console.log(response.data);
                setDelMessage("Song Deleted Successfully.");
                setSongs(songs.filter((song) => song.id !== songId));
            });
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center my-5">
                <p className="font-bold text-center text-slate-800 text-4xl my-4">
                    Songs List
                </p>{" "}
                {isLoading ? (
                    <h1 className="font-bold text-center text-slate-800 text-2xl my-4">
                        Loading song data...
                    </h1>
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <Link to="/create">
                            <button className="bg-white py-2 px-5 border-2 border-green-600 rounded-md shadow-md font-semibold my-2 hover:bg-green-600 hover:text-white transition">
                                Add song
                            </button>
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
                                className="bg-white shadow-md rounded-md py-2 px-6 m-3 min-w-full"
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

                        {/* Pagination */}
                        <div className="my-2 py-2 bg-white shadow-md rounded-md px-5 flex justify-around items-center w-full">
                            <button
                                className="hover:font-bold hover:italic cursor-pointer transition-all"
                                onClick={() =>
                                    setCurrentPage((prevPage) =>
                                        Math.max(prevPage - 1, 1)
                                    )
                                }
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                className="hover:font-bold hover:italic cursor-pointer transition-all"
                                onClick={() =>
                                    setCurrentPage((prevPage) =>
                                        Math.min(prevPage + 1, totalPages)
                                    )
                                }
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default View;
