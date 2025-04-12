import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token); // si usas JWT
                navigate('/users'); // redirige a la lista de usuarios
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error en el login:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo"
                        className="form-control"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="form-control"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
