// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Landing() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/hero'); // Programmatically navigate to /hero
  };

  return(
    <>
    <div style={{ backgroundColor: '#0052FE' }} 
    className="text-center h-screen flex justify-center ">
    <div className="mt-60">
        <h1 className="text-6xl font-bold text-white"
       >
        RoomieOnBase
        </h1>
      <div style={{ color: '#0052FE' }} className="mt-4">
      {/* <Link to='/hero'> */}
          <button onClick={handleClick} className="bg-white border-2 border-white px-20 py-3 rounded-md mb-4">
                Get Started    
          </button>
      {/* </Link> */}
             
          </div>
    </div>
    </div>
    </>
   
  );
  
}
