import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const DummyChart = () => (
  <TableContainer>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Title</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>dummyChart</TableCell>
        <TableCell>Dummy Chart</TableCell>
      </TableRow>
    </TableBody>
  </TableContainer>
);

export default DummyChart;
