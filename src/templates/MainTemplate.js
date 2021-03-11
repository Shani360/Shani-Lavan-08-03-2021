import React from 'react';
import Navbar from '../components/Navbar';
import Tabs from '../components/Tabs';


const MainTemplate = props => {
  return (
    <div>
      <Navbar {...props} />
      <div className="main">
        {props.children}
      </div>
      <Tabs {...props} />

    </div>
  );
};

export default MainTemplate;