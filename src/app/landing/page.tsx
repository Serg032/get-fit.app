import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const LandingPage = () => {
  return (
    <Box className="h-screen w-screen flex flex-col gap-10 items-center">
      <Box className="w-screen flex flex-col items-center gap-4 p-3">
        <Typography variant="h3">Get Fit</Typography>
        <Typography variant="h4">Your new challenge</Typography>
      </Box>
      <Box className="flex flex-col gap-3">
        <Button variant="contained" color="primary">
          <Link href={"/signup"}>Sign up</Link>
        </Button>
        <Button variant="contained" color="primary">
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
