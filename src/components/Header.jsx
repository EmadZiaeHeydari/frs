import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <>
    <div className="bg-blue-600  fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 shadow-lg">
    
      <Link className="text-right text-4xl text-white hover:text-blue-300 transition-colors" href="/">Home</Link>
      <div className="text-center text-3xl font-semibold text-white shadow-lg shadow-black">
        EmadZiaeHeydari
      </div>
       
      <Link className="text-right text-4xl text-white hover:text-blue-300 transition-colors" href='/cart'>Cart</Link>
    </div>
    <br /><br /><br />
    </>
  );
}

export default Home;
