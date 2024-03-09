"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { useState } from "react";
import { login } from "../entities/users/app/login";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegisteredFail, setIsRegisteredFail] = useState<boolean>(false);
  const router = useRouter();
  const handleSignInClick = async () => {
    try {
      const response = await login({
        username,
        password,
      });

      switch (response.flag) {
        case true:
          setIsRegisteredFail(false);
          localStorage.setItem("token", response.token);
          router.push("home");
          break;
        case false:
          setIsRegisteredFail(true);
          break;
      }
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  const closeFailedRegisterDialog = () => {
    setIsRegisteredFail(false);
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
      <Box>
        <Dialog
          open={isRegisteredFail}
          aria-labelledby="Failed Register"
          aria-describedby="Failed Register"
        >
          <DialogTitle id="alert-dialog-title">{"Register Failed"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              All fields are required and username and email are unique.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeFailedRegisterDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default SignInPage;
