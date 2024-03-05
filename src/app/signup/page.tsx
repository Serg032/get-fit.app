"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { useState } from "react";
import { register } from "../entities/users/app/register";

const SignUpPage = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSignInClick = async () => {
    try {
      await register({
        name,
        lastname,
        username,
        password,
        email,
      });
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };
  return (
    <Box className="w-screen min-h-screen h-full flex flex-col items-center gap-8">
      <Box className="w-screen flex items-start p-1">
        <Button variant="outlined">
          <Link href={"/landing"}>
            <ArrowBackIosIcon />
          </Link>
        </Button>
      </Box>
      <Typography className="p-1" variant="h4">
        Sign In
      </Typography>
      <form className="w-screen flex flex-col items-center gap-5 p-4">
        <Box className="flex flex-col gap-1">
          <TextField
            label="Name"
            variant="outlined"
            required={true}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            label="LastName"
            variant="outlined"
            required={true}
            onChange={(event) => setLastname(event.target.value)}
          />
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            label="email"
            variant="outlined"
            required={true}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            label="username"
            variant="outlined"
            required={true}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            label="password"
            variant="outlined"
            required={true}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Box>
        <Button variant="contained" color="primary" onClick={handleSignInClick}>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default SignUpPage;
