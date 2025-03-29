import {useEffect, useState} from "react";
import {getAllUsers} from '../services/UserService'

export default function useUsers() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchUsers();
    }, []);


    const fetchUsers = async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
        } catch (error) {
            console.log("ERROR", error);
        }
        
    }

    //funcion anonima, arrow function

    return {users}

}