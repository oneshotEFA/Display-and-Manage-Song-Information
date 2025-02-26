import React, { useState } from 'react';
import "./AddMuiscStyles.css";

function AddMusic() {
    const [music, setMusic] = useState({
        name: '',
        title: '',
        albumname: '',
        genre: ''
    });
    var noting  = {
        name: '',
        title: '',
        albumname: '',
        genre: ''
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMusic({
            ...music,
            [name]: value
        });
    };

    async function SaveMusic(event) {
        event.preventDefault(); 

        try {
            const response = await fetch("http://localhost:8080/music/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(music) 
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }


            alert('Music added successfully');
            setMusic(noting);
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding music');
        }
    }

    return (
        <div className="contain">
            <div className="card">
                <div className="form">
                    <div className="body-header">
                        <h1>Adding Music Info to the Database</h1>
                    </div>
                    <div className="card-body">
                        <label>Artist Name:
                            <input
                                name="name"
                                value={music.name}
                                onChange={handleChange}
                                placeholder="Artist Name"
                                required
                            />
                        </label>
                    </div>
                    <div className="card-body">
                        <label>Music Title:
                            <input
                                name="title"
                                value={music.title}
                                onChange={handleChange}
                                placeholder="Music Title"
                                required
                            />
                        </label>
                    </div>
                    <div className="card-body">
                        <label>Album to Include(optional):
                            <input
                                name="albumname"
                                value={music.albumname}
                                onChange={handleChange}
                                placeholder="Album Name"
                            />
                        </label>
                    </div>
                    <div className="card-body">
                        <label>Genre of Music:
                            <input
                                name="genre"
                                value={music.genre}
                                onChange={handleChange}
                                placeholder="Genre"
                            />
                        </label>
                    </div>
                    <button onClick={SaveMusic} type="submit" className="primary">
                        Add Music
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddMusic;
