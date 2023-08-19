import React from "react";
import "./index.css";

function ListCard({ ListCard, img }) {
    return (
        <>
            <div class="spotify-playlists">
                <h2>Popular Music</h2>

                <div className="list">
                    {ListCard.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={img} alt={item.title} />
                            <div className="play">
                                <span className="fa fa-play"></span>
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </> 
    )
}

export default ListCard;