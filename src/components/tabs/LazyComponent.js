import { Box } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Loading } from "../loading";

export const LazyComponent = ({ path }) => {
  const Component = lazy(() => import(`${path}`));

  return (
    <Box display="flex" justifyContent="center" m={10}>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </Box>
  )
};