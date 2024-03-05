"use client";
import "dotenv/config";
import { CreateUserCommand } from "../domain";

interface SuccessfullResponse {
  message: string;
  statusCode: 201;
}

export const register = async (
  command: CreateUserCommand
): Promise<SuccessfullResponse> => {
  try {
    const dataFetched = await fetch(`${process.env.ROOT_LOCAL_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(command),
    });

    return (await dataFetched.json()) as SuccessfullResponse;
  } catch (error) {
    throw error;
  }
};
