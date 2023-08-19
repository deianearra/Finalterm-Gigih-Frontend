import React from "react";

import Button from "../../Atom/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import "./index.css";

function Navbar() {
    return(
        <>
            <div className="topbar">
                <div className="prev-next-buttons">
                    <Button className={"bg-[090909]"} content={<FontAwesomeIcon icon={faChevronLeft}/>} />
                    <Button className={"bg-[090909]"} content={<FontAwesomeIcon icon={faChevronRight} />} />
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to={"/"}>Premium</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Support</Link>
                        </li>
                        <li>
                            <Link to={"/"}>DownloLinkd</Link>
                        </li>
                        <li clLinkssNLinkme="divider">|</li>
                        <li>
                            <Link to={"/"}>Sign Up</Link>
                        </li>
                    </ul>
                    <Button className={"bg-[ffffff]"} content={"Login"} />
                </div>
            </div>
        </> 
    )
};

export default Navbar;