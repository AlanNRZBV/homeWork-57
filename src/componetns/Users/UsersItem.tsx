import { FC } from 'react';
import { IUsersItem } from '../../types';

const UsersItem: FC<IUsersItem> = ({user}) => {
  return (<div>
    <span>{user.name}</span>
    <span>{user.email}</span>
    <span>{user.isActive ? "Active" : "Inactive"}</span>
    <span>{user.role}</span>
  </div>)
};

export default UsersItem;
