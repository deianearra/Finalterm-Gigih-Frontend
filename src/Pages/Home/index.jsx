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
            title: "Today's Top Hits",
            description: "Rema & Selena Gomez are on top of the..."
        },
        {
            title: "RapCaviar",
            description: "New Music from Lil Baby, Juice WRLD an..."
        },
        {
            title: "All out 2010s",
            description: "The biggest spmgs pf tje 2010s. Cover:..."
        },
        {
            title: "Rock Classics",
            description: "Rock Legends & epic songs that continue t..."
        },
        {
            title: "Chill Hits",
            description: "Kick back to the best new and recent chill..."
        },
        {
            title: "Hot Country",
            description: "The hottest songs in Country music. Cover..."
        },
        {
            title: "Are & Be",
            description: "The best R&B songs of 2020. Cover: Lucky..."
        },
        {
            title: "Signed XOXO",
            description: "The best new music from Atlantic Records..."
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

