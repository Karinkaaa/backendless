import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const Loading = () => (
  <Box position="absolute" top="45%" left="50%">
    <CircularProgress color="secondary" sx={{ alignSelf: "center" }} />
  </Box>
);
