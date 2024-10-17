// import React from 'react';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import agreeabless from '../../assets/Agreeableness.png'

const Code = () => {

  const [code, setCode] = useState('');
  const [error, setError] = useState('');
 
  const navigate = useNavigate();

  const handleAccount = () => {
    navigate('/account'); // i dont know where thuis is linked to but i added it to button continue
  };
  

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!code) {
      setError('Code is required.');
    } else {
      setError('');
      // Proceed with code verification logic here
      console.log('Code submitted:', code);
    }

  };
    
  return (
    <div style={{ backgroundColor: '#f5f7f2' }}
     className="justify-center items-center h-screen p-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-20 pl-6">RoomieOnBase</h1>
      <div className="flex w-full max-w-6xl">
        
        {/* Left Section */}
        <div className="w-1/2 p-8 ">
        <div className='bg-white p-8 rounded-md'>
        <h2 style={{color:'#002572'}} className="text-2xl font-bold mb-4">
            Enter the 6-digit code that we sent to
            xxxxx@domain.com
          </h2>
          <p className='mb-12'>
          <Link to="/login"  // add navigation to it
             className="text-blue-600 hover:underline ">
              Wrong Email?
            </Link>
          </p>
            <form className="space-y-4" onClick={handleSubmit}>
              <input
                type="text"
                placeholder="Code"
                value={code}  //use code state
                onChange={(e) => setCode(e.target.value)} // update code state
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </form>
          {error && <p className="text-red-600">{error}</p>}
          <div className='flex justify-between flex-row mt-12'>
              <p className="mt-4 text-gray-600">
                Didnt get the CODE?{' '}
                <Link to="/login"  // add navigation to it
                className="text-blue-600 hover:underline">
                  Resend
                </Link>
              </p>
              <div>
              <button
                type="submit"
                className="w-full py-3 px-16 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                onClick={handleAccount}
              >
                Continue
              </button>
              </div>
          </div>

         
         
        </div>
       <p  className='mt-12'>
        <Link to="/login"  // add navigation to it
             className="text-blue-600 hover:underline">
              Customer Support?
            </Link>
            </p>
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
            <img src={agreeabless}
             alt="Character"
             className="-translate-y-20"
             width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;



// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import agreeabless from '../../assets/Agreeableness.png';

// const Code = () => {
//   const [code, setCode] = useState('');
//   const [error, setError] = useState('');

//   // Form submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!code) {
//       setError('Code is required.');
//     } else {
//       setError('');
//       // Proceed with code verification logic here
//       console.log('Code submitted:', code);
//     }
//   };

//   return (
//     <div
//       style={{ backgroundColor: '#f5f7f2' }}
//       className="justify-center items-center h-screen p-12"
//     >
//       <h1 className="text-3xl font-bold text-blue-600 mb-20 pl-6">RoomieOnBase</h1>
//       <div className="flex w-full max-w-6xl">
//         {/* Left Section */}
//         <div className="w-1/2 p-8 rounded-md">
//           <h2 style={{ color: '#002572' }} className="text-4xl font-bold mb-16">
//             Discover Your Personality OnChain
//           </h2>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Code"
//               value={code}  //  Use 'code' state 
//               onChange={(e) => setCode(e.target.value)}  // Update 'code' state
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//             {error && <p className="text-red-600">{error}</p>}
//             <div className="flex justify-between flex-row mt-12">
//               <p className="mt-4 text-gray-600">
//                 Didnt get the CODE?{' '}
//                 <Link to="/login" className="text-blue-600 hover:underline">
//                   Resend
//                 </Link>
//               </p>
//               <button
//                 type="submit"  // Trigger form submission 
//                 className="w-full py-3 px-16 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
//               >
//                 Continue
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right Section */}
//         <div style={{ color: '#002572' }} className="w-1/2 pt-16 p-8 flex flex-col justify-center items-center">
//           <p className="text-xl text-start font-bold">
//             Unlock insights about your personality <br /> securely on the blockchain.
//           </p>
//           <p className="font-semibold text-start text-2xl pt-6">
//             Find and connect with compatible <br /> roommates and start earning <br /> together.
//           </p>
//           <div className="mt-6">
//             <img
//               src={agreeabless}
//               alt="Character"
//               className="-translate-y-24"
//               width={400}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Code;
