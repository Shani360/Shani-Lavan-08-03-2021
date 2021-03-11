import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FetchBoughtList from './FetchBoughtList';
import FetchReceivedList from './FetchReceivedList';
import FetchBoughtStore from './FetchBoughtStore';
import FetchReceivedStore from './FetchReceivedStore';
import {useLocation} from 'react-router-dom';
import { configRoutes } from '../configs/data';

function TabPanel(props) {
  switch(props.value){
    case 0:
      if(props.location.pathname == "/"+configRoutes.paths[0].value)
        return <FetchBoughtList {...props}/>
      else if (props.location.pathname == "/"+configRoutes.paths[1].value)
        return <FetchReceivedList {...props}/>
    case 1:
      if(props.location.pathname == "/"+configRoutes.paths[0].value)
        return <FetchBoughtStore {...props}/>
      else if (props.location.pathname == "/"+configRoutes.paths[1].value)
        return <FetchReceivedStore {...props}/>
  }
}

function Tabsbar() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Items List" />
        <Tab label="Stores List" />
      </Tabs>
      <TabPanel value={value} location={location}/>  
    </div>
  );
}
export default Tabsbar;