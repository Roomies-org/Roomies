// import React from 'react';
import { Link } from 'react-router-dom';
import wallet from '../../assets/wallet.png'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  // Define the navbar items array
  const navItems = [
    { name: "Learn", path: "/learn" },
    { name: " About", path: "/about" },
    { name: "OnChain", path: "/onchain" },
    { name: "Wallet", path: "/wallet" }
  ];
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Programmatically navigate to /hero
  };


  return (
    <nav  style={{ backgroundColor: '#0052FE' }} className="flex justify-between items-center py-4 px-8 bg-black text-white">
      {/* Left side with title */}
      <div className="text-2xl font-bold cursor-pointer"
       onClick={handleBack}>RoomieOnBase</div>

      {/* Right side with dynamic navigation items */}
      <div className="flex items-center space-x-8">
        {navItems.map((item, index) => (
          <Link
            key={index} 
            to={item.path} 
            className={`text-lg ${item.name === "Wallet" ? "flex items-center bg-white text-blue-500 p-2 rounded-full" : ""}`}
          >
            {item.name === "Wallet" ? (
              <img src={wallet} 
              alt="Wallet Icon" 
              width={30}
              // className="h-6 w-6 mr-2"
               />
            ) : (
              item.name
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

