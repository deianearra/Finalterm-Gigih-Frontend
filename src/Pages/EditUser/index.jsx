import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Label, TextInput } from 'flowbite-react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        getUsersById(id);
    }, []);

    const getUsersById = async (id) => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                email,
                gender
            });
            navigate("/users");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-[500px] bg-white p-3 rounded">
                <h1>Add User</h1>
                <form onSubmit={updateUser}>
                    <div>
                        <div className="mb-3 block">
                            <Label
                                htmlFor="name"
                                value="Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            placeholder="Your name"
                            value = {name}
                            onChange={(e) => setName(e.target.value)}
                            type="name"
                            className="mb-3"
                        />
                    </div>
                    <div>
                        <div className="mb-3 block">
                            <Label
                                htmlFor="email"
                                value="Email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            placeholder="Your email"
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="mb-3"
                        />
                    </div>
                    <div>
                        <div className="mb-3 block">
                            <Label
                                htmlFor="gender"
                                value="Gender"
                            />
                        </div>
                        <TextInput
                            id="gender"
                            placeholder="Your gender"
                            value = {gender}
                            onChange={(e) => setGender(e.target.value)}
                            type="gender"
                            className="mb-3"
                        />
                    </div>
                    <Button type="submit">
                        Save
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;