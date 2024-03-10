interface AuthResponse {
  flag: boolean;
  tokenData?: TokenData;
}

interface TokenData {
  sub: number;
  username: string;
}

export const authenticateUser = async (
  token: string
): Promise<AuthResponse> => {
  const response = await fetch("http://localhost:3000/user/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    return {
      flag: false,
    };
  }

  return { flag: true, tokenData: (await response.json()) as TokenData };
};
