import React from 'react';
import Header from './Header';

const Layout = (props) => {
    const { children } = props;
    return (
      <div className="flex flex-col bg-slate-900 text-white">
        <Header />
        <main className="flex-1 flex flex-col p-4">{children}</main>
       
      </div>
    );
};

export default Layout;