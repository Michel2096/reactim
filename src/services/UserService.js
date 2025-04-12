const BASE_URL = "http://127.0.0.1:5000";

// Obtener todos los usuarios
export async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users/`);
    if (!response.ok) throw new Error("Error al obtener usuarios");
    return response.json();
}

// Obtener un usuario por ID
export async function getUserById(id) {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error("Error al obtener usuario");
    return response.json();
}

// Crear nuevo usuario
export async function createUser(data) {
    const response = await fetch(`${BASE_URL}/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error al crear usuario");
    return response.json();
}

// Actualizar usuario existente
export async function updateUser(id, data) {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error al actualizar usuario");
    return response.json();
}

// Eliminar usuario
export async function deleteUser(id) {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar usuario");
    return true;
}
