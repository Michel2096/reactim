import React from 'react'
import './style.css'

const UsersList = ({users}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((usuario) => (
                
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>
                    </tr>   
                ))}
                </tbody>
            </table>
        </div >
    );
};

export default UsersList
