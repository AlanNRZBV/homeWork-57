import React, { FC, useState } from 'react';
import { IUserForm } from '../../types';

const UserForm: FC<IUserForm> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [checkbox, setCheckbox] = useState<boolean>(false)
  const [role, setRole]=useState<string>('')

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log(name);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked);
  };

  const handleChangeRole = (event: React.ChangeEvent<HTMLSelectElement>)=>{
    setRole(event.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: Math.random(),
      name: name,
      email: email,
      isActive: checkbox,
      role: role
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add user</h4>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="name"
          name="name"
          className="form-control"
          id="name"
          placeholder="John Smith"
          value={name}
          onChange={handleChangeName}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          required
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="isActive" checked={checkbox} onChange={handleChangeCheckbox}/>
        <label className="form-check-label" htmlFor="isActive">
          Set active
        </label>
      </div>
      <div className="mb-3">
        <select className="form-select" required value={role} onChange={handleChangeRole}>
          <option defaultValue="Default">Choose role</option>
          <option value="User">User</option>
          <option value="Editor">Editor</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default UserForm;
