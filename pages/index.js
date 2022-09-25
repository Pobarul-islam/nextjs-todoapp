import React from 'react';
import { UseAuth } from './Context/AuthContext';


import Login from './Login';
import UserDashBoard from './UserDashBoard';

const index = () => {
  const { currentUser } = UseAuth();
  console.log(currentUser)
  return (
    <div>
      {!currentUser && <Login />}
      {currentUser && <UserDashBoard/>}
    </div>
  );
};

export default index;