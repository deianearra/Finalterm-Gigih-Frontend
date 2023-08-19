import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Sidebar from "../../Components//Organism/Sidebar";
import Navbar from "../../Components/Organism/Navbar";
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
                <ListCard ListCard={listCard} img="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" />
            </div>
            <div>
                <h1>Home</h1>
                <Link to="/users">Users</Link>
            </div>
        </>
    )
}

export default Home;

