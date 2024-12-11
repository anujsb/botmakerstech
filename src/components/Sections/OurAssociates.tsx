import Image from 'next/image'
import React from 'react'


const associates = [
    { image: "/ass1.jpeg", text: "TechFest - IIT Mumbai" },
    { image: "/ass2.jpeg", text: "IIT Indore" },
    { image: "/ass3.jpeg", text: "BITS, Pilani" },
    { image: "/ass4.jpeg", text: "IIT Roorkee" },
    { image: "/ass5.jpeg", text: "Technovanza VJTI" },
    { image: "/ass6.jpeg", text: "D.Y. Patil Education Society" },
  ];


const OurAssociates = () => {
  return (


    <div className='my-8 flex gap-10 items-end justify-center'>
        {associates.map((associates, index) => (
        <div key={index} className='flex flex-col items-center justify-center max-w-[150px]'>
            <Image
            src={associates.image}
            alt='1'
            width="150"
            height="100"
            />
            <p className='mt-4'>
            {associates.text}
            </p>
        </div>
        ))}
    </div>
  )
}

export default OurAssociates