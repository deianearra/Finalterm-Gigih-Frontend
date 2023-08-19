import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faPlusSquare, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <Link to={"/"}>
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                            alt="Logo" />
                    </Link>
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <FontAwesomeIcon icon={faHome} size="xl" className="mr-3"/>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <FontAwesomeIcon icon={faSearch} size="xl" className="mr-3"/>
                                <span>SpotMusic</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <FontAwesomeIcon icon={faBook} size="xl" className="mr-3"/>
                                <span>SpotMovie</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <FontAwesomeIcon icon={faPlusSquare} size="xl" className="mr-3"/>
                                <span>Create Playlist</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <FontAwesomeIcon icon={faHeart} size="xl" className="mr-3"/>
                                <span>Liked Songs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="users">
                                <FontAwesomeIcon icon={faUser} size="xl" className="mr-3"/>
                                <span>Users</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;