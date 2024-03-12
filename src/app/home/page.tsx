"use client";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { authenticateUser } from "../services/auth/authenticate-user";
import { useRouter } from "next/navigation";
import { Add, ListOutlined } from "@mui/icons-material";

const HomePage = () => {
  const router = useRouter();

  const goToNewWorkout = () => router.push("new-workout");

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

  return (
    <Box className="w-full h-screen flex justify-center items-center">
      <Box className="w-full h-screen flex flex-col gap-10 justify-center items-center">
        <Button
          type="button"
          variant="outlined"
          className="w-44 flex gap-5"
          onClick={goToNewWorkout}
        >
          <Add />
          <Typography>Add new workout</Typography>
        </Button>
        <Button type="button" variant="outlined" className="w-44 flex gap-5">
          <ListOutlined />
          <Typography>My workouts</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
