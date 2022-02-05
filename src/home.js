import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Homepage = () => {
    const [users, setUsers] = useState([]);

    useEffect(function(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .then(error  => console.log(error))
    }, []);

    return (
        <table className="table-info table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Full name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    );
}
export default Homepage;