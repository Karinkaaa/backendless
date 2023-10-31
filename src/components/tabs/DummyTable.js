import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const DummyTable = () => (
  <TableContainer>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Title</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>dummyTable</TableCell>
        <TableCell>Dummy Table</TableCell>
      </TableRow>
    </TableBody>
  </TableContainer>
);

export default DummyTable;
