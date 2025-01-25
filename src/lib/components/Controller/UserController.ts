import User from "../Model/Users";

let users: User[] = [];

export const createUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const id = Math.random().toString(36).substr(2, 9);
  const newUser = new User(id, firstName, lastName, email, password);
  users.push(newUser);
  return newUser;
};

export const getUsers = () => {
  return users;
};
