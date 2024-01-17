import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewSong = ({ match }) => {
    const [song, setSong] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const songId = match.params.id;
        axios
            .get(`http://localhost:8000/api/songs/${songId}`)
            .then((response) => {
                console.log("Successfully retrieved song.", response.data);
                setSuccessMessage("Successfully retrieved data.");
            })
            .catch((error) => {
                console.error("Error catching data fix the code Ivan!.", error);
                setSuccessMessage("Error retrieving data.");
            });
    }, [match.params.id]);

    return (
        <>
            <div>
                {song ? (
                    <div>
                        <h1>{song.title}</h1>
                        <p>Artist: {song.artist}</p>
                        <p>Album: {song.album}</p>
                    </div>
                ) : (
                    { successMessage }
                )}
            </div>
        </>
    );
};

export default ViewSong;
