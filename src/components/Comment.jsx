import React from 'react'

 async function Comment() {
  const res = await fetch('http://localhost:3001/Comment/')
  const data = await res.json()
  return (
    <>
    <div>
      {
        data.map((data)=>
        <div key={data.id}  className="flex justify-end">
        <textarea  className='bg-blue-300 font-semibold border-3 text-end border-black shadow-md rounded-lg w-2/5 size-32 mb-5'  
        readOnly>
      {data.payam}
        </textarea>
        </div>
        )
      }
    </div>
    
    </>
  )
}

export default Comment
