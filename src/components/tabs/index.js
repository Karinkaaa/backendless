import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { DefaultRoute } from "../routes/DefaultRoute";
import { InvalidRoute } from "../routes/InvalidRoute";
import { LazyComponent } from "./LazyComponent";
import tabs from "./tabs.json";

export const AllTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1);

  const sortedTabs = tabs.sort((a, b) => a.order - b.order);
  const [currentTab, setCurrentTab] = useState(currentPath);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    setCurrentTab(currentPath);
  }, [currentPath]);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        {sortedTabs.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            label={tab.title}
            component={Link}
            to={tab.id}
          />
        ))}
      </Tabs>
      <Routes>
        {sortedTabs.map((tab) => (
          <Route
            key={tab.id}
            path={tab.id}
            element={<LazyComponent path={tab.path} />}
          />
        ))}
        <Route path="/" element={<DefaultRoute tabs={sortedTabs} />} />
        <Route path="*" element={<InvalidRoute tabs={sortedTabs} />} />
      </Routes>
    </Box>
  );
};
