import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

const SignInPage = () => {
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
          <TextField label="Name" variant="outlined" required={true} />
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField label="LastName" variant="outlined" required={true} />
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            label="email"
            variant="outlined"
            required={true}
            type="email"
          />
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField label="username" variant="outlined" required={true} />
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            label="password"
            variant="outlined"
            required={true}
            type="password"
          />
        </Box>
        <Button variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default SignInPage;
