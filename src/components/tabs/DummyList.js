import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const DummyList = () => (
  <TableContainer>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Title</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>dummyList</TableCell>
        <TableCell>Dummy List</TableCell>
      </TableRow>
    </TableBody>
  </TableContainer>
);

export default DummyList;
