import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Sidebar from "../../Components//Organism/Sidebar";
import ListCard from "../../Components/Molecule/ListCard";
import ListVideo from "../../Components/Molecule/ListVideo";

function Home() {
   const listCard = [
    {
        title: "Anime Hits Bonanza",
        description: "Dive into the enchanting world of anime music!"
    },
    {
        title: "Jpop Jubilation",
        description: "Celebrate the catchy beats of Jpop stars and groups."
    },
    {
        title: "Nostalgic Anime Openings",
        description: "Revisit the unforgettable anime opening tracks from the past."
    },
    {
        title: "Epic Soundtracks Odyssey",
        description: "Embark on a journey through epic soundtracks from your favorite anime."
    },
    {
        title: "Dreamy Jpop Melodies",
        description: "Immerse yourself in the soothing melodies of Jpop ballads."
    },
    {
        title: "Kawaii Beats Galore",
        description: "Experience the cutest and most energetic anime and Jpop tunes."
    },
    {
        title: "Anime Groove Fusion",
        description: "Feel the rhythm with a fusion of anime and Jpop grooves."
    },
    {
        title: "Magical Jpop Spell",
        description: "Enchanting new releases from the magical world of Jpop."
    }
    ]
    return (
        <>
            <Sidebar />
            <div className="main-container">
                <Navbar />
                <ListVideo />
                <ListCard ListCard={listCard} img="https://cdn1.katadata.co.id/media/images/thumb/2022/11/14/KARAKTER_ANIME_RAMBUT_PINK-2022_11_14-16_59_26_e302c2147b3a7b128573773b0dc5e694_960x640_thumb.jpg" />
            </div>
            <div>
                <h1>Home</h1>
                <Link to="/users">Users</Link>
            </div>
        </>
    )
}

export default Home;

