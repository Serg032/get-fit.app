import { CreateUserCommand } from "../domain";

interface SuccessfullResponse {
  message: string;
  statusCode: 201;
}

interface FailedResponse {
  message: string;
  statusCode: 400;
}

export const register = async (
  command: CreateUserCommand
): Promise<SuccessfullResponse | FailedResponse> => {
  try {
    const dataFetched = await fetch(`http://localhost:3000/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(command),
    });

    const data = (await dataFetched.json()) as
      | SuccessfullResponse
      | FailedResponse;

    if (data.statusCode === 400) {
      return data;
    }

    return data;
  } catch (error) {
    throw error;
  }
};
