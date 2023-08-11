import React from 'react';
import "../index.css"

const Loader = () => {
  return (
    <div className='flex justify-center h-[85vh] items-center'>    
    <div className="animate-spin h-10 w-10 border-4 border-t-black rounded-full opacity-0.5">
      </div>

    </div>
  );
}

export default Loader;
