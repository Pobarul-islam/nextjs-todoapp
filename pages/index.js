import React from 'react';
import { UseAuth } from './Context/AuthContext';


import Login from './Login';

const index = () => {
  const { currentUser } = UseAuth();
  console.log(currentUser)
  return (
    <div>
      <Login/>
    </div>
  );
};

export default index;