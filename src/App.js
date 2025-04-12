import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from '../src/components/userList/UsersList';
import UserEdit from '../src/components/userEdit/UserEdit';
import useUsers from './hooks/useUsers';
import Login from '../src/components/login/login';

function App() {
  const { users } = useUsers();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/users" element={<UsersList users={users} />} />
          <Route path="/edit/:id" element={<UserEdit />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
