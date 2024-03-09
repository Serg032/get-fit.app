import { LoginCommand } from "../domain";

interface LoginResponse {
  flag: boolean;
  token: string;
}

export const login = async (command: LoginCommand): Promise<LoginResponse> => {
  try {
    const dataFetched = await fetch(`http://localhost:3000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(command),
    });

    return (await dataFetched.json()) as LoginResponse;
  } catch (error) {
    throw error;
  }
};
