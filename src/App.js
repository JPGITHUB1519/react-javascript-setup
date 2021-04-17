import React from 'react';
import Proptypes from 'prop-types';

// first react component
const App = ({title}) => {
  return <div>{title}</div>;
};

App.propTypes = {
  title: Proptypes.string
};

export default App;
