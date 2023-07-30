import React from 'react'
import img from "../asset/Gray.png"
export default function FeaturedPostSkeleton() {
  return (
    <div className='w-full animate-pulse' >
      <img
        className="img"
        src={img}
        alt=""
      />
    </div>
  );
}