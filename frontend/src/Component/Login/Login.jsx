// import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import openness from '../../assets/openness.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const navigate = useNavigate();

  const handleCode = () => {
    navigate('/code'); // i dont know where thuis is linked to but i added it to button continue
  };
  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // Example login logic (replace with your API or auth function)
    if (email === 'test@example.com' && password === 'password') {
      // Navigate to the dashboard or another page upon successful login

    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{ backgroundColor: '#f5f7f2' }}
     className="justify-center items-center h-screen p-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-20 pl-6">RoomieOnBase</h1>
      <div className="flex w-full max-w-6xl">
        
        {/* Left Section */}
        <div className="w-1/2 p-8 rounded-md">
        <div className='bg-white p-8 rounded-md'>
        <h2 style={{color:'#002572'}}
        className="text-4xl font-bold mb-16">
            Discover Your Personality OnChain
          </h2>
          <form className="space-y-4" onClick={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </form>
          {error && <p className="text-red-600">{error}</p>}
          <div className='flex justify-between flex-row mt-12'>
          <p className="mt-4 text-gray-600">
            Got an ID?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
            <div>
            <button
            onClick={handleCode}
              type="submit"
              className="w-full py-3 px-16 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Continue
            </button>
            </div>
          </div>
         
        </div>
        </div>
   

        {/* Right Section */}
        <div style={{color:'#002572'}} className="w-1/2 pt-16 p-8 flex flex-col justify-center items-center">
          <p className="text-xl text-start font-bold">
            Unlock insights about your personality <br />securely on the blockchain.
          </p>
          <p className='font-semibold text-start text-2xl pt-6'>
            Find and connect with compatible <br />roommates and start earning <br />together.
          </p>
          <div className="mt-6">
            {/* You can add your character image here */}
            <img src={openness}
             alt="Character"
             className="-translate-y-24"
             width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
