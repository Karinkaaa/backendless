import React from "react";
import { Navigate } from "react-router-dom";

export const InvalidRoute = ({ tabs }) => {
  if (tabs.length === 0) {
    return <Navigate to={"/"} replace />
  } else {
    return <Navigate to={tabs[0]?.id} replace />
  }
}