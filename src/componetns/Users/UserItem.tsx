import { FC } from 'react';
import { IUsersItem } from '../../types';

const UserItem: FC<IUsersItem> = ({ user }) => {
  return (
    <div className="d-flex flex-column border border-1 rounded-1 px-3 py-3 mb-3">
      <span>
        <b className="text-primary">Name:</b> {user.name}
      </span>
      <span>
        <b className="text-primary">Email:</b> {user.email}
      </span>
      <span>
        <b className="text-primary">Status:</b> {user.isActive ? 'Active' : 'Inactive'}
      </span>
      <span>
        <b className="text-primary">Role:</b> {user.role}
      </span>
    </div>
  );
};

export default UserItem;
