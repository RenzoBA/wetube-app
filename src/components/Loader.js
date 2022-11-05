import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Box minHeight="95vh">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress size={70} thickness={6} sx={{ color: "#F31503" }} />
      </Stack>
    </Box>
  );
};

export default Loader;
