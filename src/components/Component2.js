import React from 'react'
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { Card2 } from './Card2';

const Details = [
  {
    img : "Card2-1.jpeg",
    teamName : "Las Vegas Aviators",
    venue : "Las Vegas Ballpark, Las Vegas, Nevada",
    button : "Take Flight Collection"
  },
  {
    img : "Card2-2.jpeg",
    teamName : "Sacramento River Cats",
    venue : "Sutter Health Park, Sacramento, California",
    button : "Orange Collection"
  },
  {
    img : "Card2-1.jpeg",
    teamName : "Las Vegas Aviators",
    venue : "Las Vegas Ballpark, Las Vegas, Nevada",
    button : "Take Flight Collection"
  },
]





export const Component2 = () => {
  return (
    <div className='w-[1240px] h-[918px] flex ml-16 mt-10 bg-blue-50 justify-center items-center Comp2'>

        <div className='w-[1085px] h-[799px] flex flex-col items-center gap-8'>

          <div className='flex flex-col items-center gap-4'>

            <div className='w-fit'>
              <h2 className=' font-bold text-[50px]'>Collection Spotlight</h2>
            </div>

            <div className='w-[917px] h-[46px] text-sm text-center'>
              <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            </div>

          </div>

          <div className='w-[1085px] h-[625px] flex items-center justify-between'>

            <div className='w-[36px] h-[49px] border-[1px] border-blue-400 flex justify-center items-center'>
              <FcPrevious className=' text-2xl'></FcPrevious>
            </div>

            <div className='w-[850px] h-[625px] flex justify-evenly gap-8'>
              {
                Details.map((detail)=>(<Card2 detail = {detail}></Card2>))
              }
            </div>

            <div className='w-[36px] h-[49px] border-[1px] border-blue-400 flex justify-center items-center'>
              <FcNext className=' text-2xl'></FcNext>
            </div>

          </div>

          

        </div>

    </div>
  )
}
