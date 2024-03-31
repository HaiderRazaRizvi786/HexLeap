import React from 'react'
import { Card1 } from './Card1'

const Details = [
    {
        img : "RedBaseBall.jpeg",
        teamName : "Sacramento River Cats",
        totalEvents : 48,
        sport : "Baseball"
    },
    {
        img : "BlueBaseBall.jpeg",
        teamName : "Las Vegas Aviators",
        totalEvents : 28,
        sport : "Baseball"
    },
    {
        img : "RedIceHockey.jpeg",
        teamName : "New Jersey Devils",
        totalEvents : 15,
        sport : "Ice Hockey"
    },
    {
        img : "BlueBaseBall.jpeg",
        teamName : "Las Vegas Aviators",
        totalEvents : 28,
        sport : "Baseball"
    },
]

export const Component1 = () => {

  return (
    <div className='flex w-[1249px] h-[673px] flex-col ml-16 mt-10 gap-6 relative'>

        <div className='h-[41px] w-[80px]'>
            <div className=' font-bold h-[36px] w-[80px] text-2xl'>Sports</div>
            <div className=' border-[2px] border-blue-400 w-[80px]'></div>
        </div>

        <div className='w-full flex gap-[14px]'>

            <div className=' w-4/5 flex gap-[14px]'>
                {
                    Details.map((detail) => (<Card1 detail={detail}></Card1>))
                }
            </div>

            <div className='w-1/5'>

                <div className='w-[238px] h-[511px] flex justify-center items-center shadow-md ADV'>

                    <div className='w-[218px] h-[491px] relative items-center flex flex-col gap-2'>

                        <div className='w-[48px] h-[25px] right-0 absolute bg-black flex justify-center'>
                            <span className='w-[18px] h-[19px] text-white font-bold'>Ad</span>
                        </div>

                        <div className='w-[218px] h-[218px]'>
                            <img alt='adv' src={require("../assets/Advertisement.png")}></img>
                        
                        </div>

                        <div className='w-[188px] h-[24px]'>
                            <h2 className=' font-semibold text-xl'>Advertisement title</h2>
                        </div>

                        <div className='w-[188px] h-[171px]'>
                            <p className=' font-normal text-sm opacity-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                    </div>

                </div>
                
            </div>

        </div>

        <div className='flex h-[46px] w-[124px] justify-center items-center border-[2px] bg-blue-400 text-white absolute bottom-0 right-[45%]'>
            <button>See More</button>
        </div>

    </div>
  )
}
