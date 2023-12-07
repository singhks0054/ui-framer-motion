import React, { useRef } from 'react'
import Card from './card'

export default function Foreground() {
  const CardData = [
    {
      id: 1,
      desc: `Why couldn't the bicycle stand up by itself? Because it was two-tired!`,
      size: '0.9 mb',
      download: true,
      tag: true,
      tagText: 'Lorem, ipsum dolor.',
      color: 'bg-green-500'
    },
    {
      id: 2,
      desc: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      size: '0.3 mb',
      download: false,
      tag: true,
      tagText: '',
      color: 'bg-yellow-300'
    },
    {
      id: 3,
      desc: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
      size: '0.2 mb',
      download: true,
      tag: true,
      tagText: 'Lorem, ipsum dolor.',
      color: 'bg-red-300'
    },
    {
      id: 4,
      desc: 'The only way to achieve the impossible is to believe it is possible.',
      size: '0.7 mb',
      download: false,
      tag: true,
      tagText: '',
      color: 'bg-teal-300'
    }
  ]
  const foreRef = useRef(null)
  return (
    <main ref={foreRef} className='fixed top-0 z-20 w-full flex flex-wrap gap-10 h-screen p-6'>
      {
        CardData.map((item) => <Card reference={foreRef} {...item} key={item.id} />)
      }
    </main>
  )
}
