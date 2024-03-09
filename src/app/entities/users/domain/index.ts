interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  username: string;
}

export interface CreateUserCommand extends User {}

export type LoginCommand = Omit<User, "name" | "lastname" | "email">;
