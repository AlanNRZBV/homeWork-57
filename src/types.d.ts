export interface IUserForm {
  onSubmit: (user: IUser) => void;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

export interface IUsers {
  users: IUser[];
}

export interface IUsersItem {
  user: IUser;
}
