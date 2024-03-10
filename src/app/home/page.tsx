"use client";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { authenticateUser } from "../auth/authenticate-user";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("signin");
      return;
    }
    async function auth() {
      const response = await authenticateUser(token!);
      return response;
    }
    auth().then((response) => {
      if (!response.tokenData) {
        router.push("signin");
      }
    });
  }, [router]);

  return <Box>home</Box>;
};

export default HomePage;
