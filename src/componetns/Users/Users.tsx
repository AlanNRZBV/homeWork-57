import UsersItem from './UsersItem.tsx';
import { IUsers } from '../../types';
import { FC } from 'react';

const Users: FC<IUsers> = ({users}) => {
  return (
    <div>
      {users.map((user)=>(
        <UsersItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;