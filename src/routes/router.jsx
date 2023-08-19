import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Users from "../Pages/Users";
import AddUser from "../Pages/AddUser";
import EditUser from "../Pages/EditUser";
import Video from "../Pages/Video";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" index element={<Home/>} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/videos/:id" element={<Video />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/edituser/:id" element={<EditUser />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
