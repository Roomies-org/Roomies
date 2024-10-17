// import React from 'react';
import hero from '../../assets/hero.png'
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  const handleEmailSignUp = () => {
    navigate('/login'); // Programmatically navigate to /hero
  };

  return (
    <div style={{ backgroundColor: '#0052FE' }}
    className="flex flex-col md:flex-row items-center justify-between p-8 text-white h-screen">
      {/* Left side - Illustration and Checklist */}
      <div className="flex flex-col items-center md:items-start">
        <img src={hero}
         alt="Illustration" 
        //  className="w-full md:w-80" 
          width={500}
         />
      </div>
      
      {/* Right side - Text and Buttons */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-5xl text-center font-semibold">
          Connect with like-minded <br /> roommates and earn <br /> together on Roomiesonbase.
        </h1>

        <div className="m-auto mt-8 block ">
        <div style={{ color: '#0052FE' }}>
            <button 
            className="bg-white border-2 border-white px-20 py-3 rounded-md mb-4"
            onClick={handleEmailSignUp}>
                Sign-Up with an Email
              </button>
        </div>
        <div>
            <button className="border-2  border-white text-white px-20 py-3 rounded-md">
                Connect Web3 Wallet
              </button>
        </div>
  
        </div>
      </div>
    </div>
  );
};

export default Hero;
