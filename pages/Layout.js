import React from 'react';
import Header from './Header';


const Layout = (props) => {
    const {children} = props
    return (
        <div className='flex flex-col min-h-screen bg-slate-900 text-white'>
            <Header />
            
            <main className='flex-1'>

                {children}
            </main>
        </div>
    );
};

export default Layout;