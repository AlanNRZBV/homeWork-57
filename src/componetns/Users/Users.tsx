import UserItem from './UserItem.tsx';
import { IUsers } from '../../types';
import { FC } from 'react';

const Users: FC<IUsers> = ({ users }) => {
  return (
    <div className="py-3">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
