// import React from 'react';
// import './App.css';

import Account from '../../assets/Account.png'

function App() {
  return (
    <div style={{backgroundColor: '#0052FE'}} className="h-screen flex items-center justify-center  m-auto">
      <div className='block'>
      <div className='m-auto text-center'>
       <img src={Account} 
       alt="success acount"
       width={200} />
       </div>
        <h1 className="text-3xl font-bold mt-4 text-white">Account Created!</h1>
      </div>
      
      </div>
  );
}

export default App;