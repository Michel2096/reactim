import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from '../../services/UserService'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const UserEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUserById(id);
                setUser(data);
            } catch (error) {
                console.error("Error al obtener usuario:", error);
            }
        };
        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value }); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(id, user);
            navigate('/');
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex flex-column bg-light p-0">
            <nav className="navbar navbar-dark bg-dark p-3">
                <div className="container-fluid">
                    <h2 className="text-white mb-0">Editar Usuario</h2>
                    <Link to="/" className="btn btn-secondary">Regresar</Link>
                </div>
            </nav>

            <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
                <form onSubmit={handleSubmit} className="card p-4 shadow w-100 max-w-600">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={user.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo"
                            value={user.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserEdit;
