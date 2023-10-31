import { Box, Container, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NoData } from "../noData";
import tabs from "./tabs.json";

export const AllTabs = () => {
  const sortedTabs = tabs.sort((a, b) => a.order - b.order);

  const [currentTab, setCurrentTab] = useState(sortedTabs[0]);
  const [importedComponent, setImportedComponent] = useState(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`${currentTab.path}`);
      const TabComponent = module.default;
      setImportedComponent(<TabComponent />);
    };

    importComponent();
  }, [currentTab.path]);

  if (sortedTabs.length === 0) {
    return <NoData />;
  }

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        {sortedTabs.map((tab) => (
          <Tab key={tab.id} value={tab} label={tab.title} />
        ))}
      </Tabs>
      <Container sx={{ mt: 10, textAlign: "center" }}>
        {importedComponent}
      </Container>
    </Box>
  );
};
