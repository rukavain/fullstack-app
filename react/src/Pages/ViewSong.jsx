import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewSong = () => {
    const { id } = useParams();
    const [song, setSong] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

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

    return (
        <>
            <div>
                {song ? (
                    <>
                        <div>
                            <h1>Title: {song.title}</h1>
                            <p>Artist: {song.artist}</p>
                            <p>Album: {song.album}</p>
                        </div>

                        <div>
                            <div>
                                <Link to={"/"}>
                                    <button>Home</button>
                                </Link>
                            </div>
                            <div>
                                <Link to={"/view"}>
                                    <button>Song list</button>
                                </Link>
                            </div>
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
