import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/UserService"; // Asegúrate que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(user);
            alert("Usuario creado exitosamente");
            navigate("/"); // Redirige al listado de usuarios
        } catch (error) {
            console.error("Error al crear usuario:", error);
            alert("Hubo un problema al crear el usuario.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow">
                <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Crear Usuario</button>
            </form>
        </div>
    );
};

export default UserForm;
