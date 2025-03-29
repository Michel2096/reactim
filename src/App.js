import './App.css';
import UsersList from './components/userList/UsersList';
import useUsers from './hooks/useUsers';

function App() {
  const {users} = useUsers();
  return (
    <div className="App">
      <UsersList users={users}/>
    </div>
  );
}

export default App;
