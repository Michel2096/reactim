import React from 'react'
import { Link } from "react-router-dom";
import { deleteUser } from '../../services/UserService';
import UserForm from '../userForm/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersList = ({users, onDelete}) => {
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
        if (!confirmDelete) return;

        try {
            await deleteUser(id);
            onDelete(); 
        } catch (error) {
            console.error("Error al eliminar:", error);
            alert("Error al eliminar el usuario.");
        }
    };
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>email</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                {users.map((usuario) => (
                
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>
                        <td>
                                <Link to={`/edit/${usuario.id}`} className="btn btn-primary btn-sm me-2">Editar</Link>
                                <button
                                    onClick={() => handleDelete(usuario.id)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Eliminar
                                </button>
                            </td>
                    </tr>   
                ))}
                </tbody>
            </table>
            <UserForm />
        </div >
    );
};

export default UsersList
