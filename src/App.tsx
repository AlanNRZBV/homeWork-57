import Navbar from './componetns/Navbar/Navbar.tsx';
import UserForm from './componetns/UserForm/UserForm.tsx';
import Users from './componetns/Users/Users.tsx';
import { useState } from 'react';
import { IUser } from './types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUser = (user: IUser) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row mt-5">
            <div className="col border border-1 rounded-3 shadow me-2 py-3">
              <UserForm onSubmit={addUser}/>
            </div>
            <div className="col border border-1 rounded-3 shadow ms-2">
              <Users users={users}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
