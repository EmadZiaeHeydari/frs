'use client'
import React, { useState } from 'react';

function SendComment() {
  const [comment, setComment] = useState('');

  
  const handleComment = async () => {
    if (!comment) {
      alert("لطفاً یک کامنت وارد کنید");
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/Comment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payam: comment,
          id: Math.floor (Math.random() * 10).toString(),
        }),
      });

      if (!res.ok) {
        throw new Error("مشکلی پیش آمده است");
      }

      
      setComment('');
      alert("کامنت شما با موفقیت ارسال شد!");
    } catch (error) {
      console.error(error);
      alert("ارسال کامنت با مشکل مواجه شد");
    }
  };

  return (
    <div>
      <div className='justify-end flex'>
        <textarea  className='h-28 w-1/3 text-end border-2 border-blue-300 '
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="نظر خود را بنویسید..."
        />
      </div>
      <div className='justify-end flex' >
        <button className='mb-4 mt-4 bg-blue-400 w-1/12 rounded-md ' type="button" onClick={handleComment}>
          ارسال کامنت
        </button>
      </div> 
    </div>
  );
}

export default SendComment;

