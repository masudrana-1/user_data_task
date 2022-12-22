import './App.css';
import { useState } from 'react';
import User from './components/Users/User';
import Loader from './components/Loader/Loader';

function App() {

  const [users, setUsers] = useState([]);

  const [userLoading, setUserLoading] = useState(false);

  const handleUsers = () => {
    setUserLoading(true);
    fetch('https://reqres.in/api/users?page=1')
      .then(res => res.json())
      .then(data => {
        setUsers(data.data);
        setUserLoading(false);
      })
      .catch(error => {
        console.error(error);
        setUserLoading(false);
      })

  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">User Data</a>
        </div>
        <div className="navbar-end">
          <a className=" btn shadow-lg shadow-blue-500/50" onClick={handleUsers}>Get Users</a>
        </div>
      </div>
      <div className='user_data_container gap-3'>
        {
          userLoading ? <Loader></Loader>
            :
            users.map(user => <User key={user.id} user={user}></User>)


        }
      </div>
    </div>
  );
}

export default App;
