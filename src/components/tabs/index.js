import { Box, Container, Tab, Tabs } from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { Loading } from "../loading";
import { NoData } from "../noData";
import tabs from "./tabs.json";

export const AllTabs = () => {
  const sortedTabs = tabs.sort((a, b) => a.order - b.order);
  const [currentTab, setCurrentTab] = useState(sortedTabs[0]);
  const TabComponent = lazy(() => import(`${currentTab.path}`));

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
      <Container sx={{ height: "100%", mt: 10, textAlign: "center" }}>
        <Suspense fallback={<Loading />}>
          <TabComponent />
        </Suspense>
      </Container>
    </Box>
  );
};
