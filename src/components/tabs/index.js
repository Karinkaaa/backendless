import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from 'react';
import { NoData } from '../noData';
import tabs from "./tabs.json";

export const AllTabs = () => {
  const sortedTabs = tabs.sort((a, b) => a.order - b.order);
  const [value, setValue] = useState(sortedTabs[0]?.id);

  if (sortedTabs.length === 0) {
    return <NoData />;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        {sortedTabs.map(({ id, title }) => (
          <Tab key={id} value={id} label={title} />
        ))}
      </Tabs>
    </Box>
  );
};
