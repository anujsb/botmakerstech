import Image from 'next/image'
import React from 'react'

const associates = [
    { image: "/ass1.jpeg", text: "TechFest - IIT Mumbai" },
    { image: "/ass2.jpeg", text: "IIT Indore" },
    { image: "/ass3.jpeg", text: "BITS, Pilani" },
    { image: "/ass4.jpeg", text: "IIT Roorkee" },
    { image: "/Technovanza VJTI.jpg", text: "Technovanza VJTI" },
    { image: "/D.Y. Patil Education Society.jpg", text: "D.Y. Patil Education Society" },
];

const OurAssociates = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold text-center mb-8'>Our Association</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center'>
        {associates.map((associate, index) => (
          <div 
            key={index} 
            className='flex flex-col items-center justify-center text-center space-y-2'
          >
            <div className='w-full max-w-[150px]'>
              <Image
                src={associate.image}
                alt={associate.text}
                width={150}
                height={100}
                className='object-contain aspect-square'
                layout='responsive'
              />
            </div>
            <p className='text-sm font-medium'>
              {associate.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurAssociates