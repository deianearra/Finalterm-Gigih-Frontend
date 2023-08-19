import React, { useEffect, useState } from "react";
import { Table } from 'flowbite-react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white p-3 rounded">
                <Link to="/adduser" className="btn btn-success">Add user</Link>
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>
                            Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Email       
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Gender
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Action
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users.map((user) => (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={user._id}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.email}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.gender}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="columns-2">
                                            <Link
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                to={`/edituser/${user._id}`}
                                            >
                                                <p>
                                                    Edit
                                                </p>
                                            </Link>
                                            <button
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                onClick={() => deleteUser(user._id)}
                                            >
                                                <p>
                                                    Delete
                                                </p>
                                            </button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        };
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default Users;