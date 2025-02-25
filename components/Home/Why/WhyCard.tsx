import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string
}

const WhyCard = ({image, title}: Props) => {
  return (
    <div className=''>
      <Image src={image} alt={title} width={70} height={70} className='mx-auto'/>
      <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{title}</h1>
      <p className='mt-2 text-center text-xs font-medium text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus.</p>
    </div>
  )
}

export default WhyCard