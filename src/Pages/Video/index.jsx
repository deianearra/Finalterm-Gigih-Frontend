import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Button, TextInput } from 'flowbite-react';

import Sidebar from "../../Components/Organism/Sidebar";
import Product from "../../Components/Molecule/Product";
import Comment from "../../Components/Molecule/Comment";
import Youtube from "../../Components/Atom/Youtube";

function Video() {
    const [product, setProduct] = useState([]);
    const [comment, setComment] = useState([]);
    const [video, setVideo] = useState([]);
    const [commentUsername, setCommentUsername] = useState("");
    const [commentContent, setCommentContent] = useState("");

    const { id } = useParams();

    useEffect(() => {
        getProductById(id);
        getCommentById(id);
        getVideoById(id);
    }, [id]);

    const getProductById = async (id) => {
        const response = await axios.get(`http://localhost:5000/videos/${id}/product`);
        setProduct(response.data.product);
    };

    const getVideoById = async (id) => {
        const response = await axios.get(`http://localhost:5000/videos/${id}`);
        setVideo(response.data);
    };

    const getCommentById = async (id) => {
        const response = await axios.get(`http://localhost:5000/videos/${id}/comment`);
        setComment(response.data.comment);
    };

    const updateComment = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/videos/${id}`, {
                commentUsername,
                commentContent,
            });
            getCommentById(id);
            setCommentUsername("");
            setCommentContent("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Sidebar />
            <div className="main-container">
                <Navbar />
                <div className="flex flex-nowrap">
                    <Product ListData={product} />
                    <Youtube videoID={video.videoID} title={video.videoTitle} />
                    <div className="w-[250px] h-full bg-slate-600 m-2 rounded-lg">
                        <Comment data={comment} Id={id} />
                        <form onSubmit={updateComment} className="m-2">
                            <div>
                                <TextInput
                                    id="username"
                                    placeholder="Your username"
                                    value={commentUsername}
                                    onChange={(e) => setCommentUsername(e.target.value)}
                                    type="username"
                                    className="mb-3"
                                />
                            </div>
                            <div>
                                <TextInput
                                    id="content"
                                    placeholder="Your content"
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                    type="content"
                                    className="mb-3"
                                />
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>


                </div>
            </div>
            <div>
                <h1>Home</h1>
                <Link to="/users">Users</Link>
            </div>
        </>
    );
}

export default Video;
