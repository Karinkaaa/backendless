import React from "react";
import { Navigate } from "react-router-dom";
import { NoData } from "../noData";

export const DefaultRoute = ({ tabs }) => {
  if (tabs.length === 0) {
    return <NoData />;
  } else {
    return <Navigate to={tabs[0].id} replace />
  }
}