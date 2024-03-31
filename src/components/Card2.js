import React from 'react'

export const Card2 = ({detail}) => {
  return (
    <div className='w-[257px] h-[625px] relative flex justify-center items-center shadow-xl LastCard bg-white'>

        {/* <img alt='layout' src={require("../assets/layout.png")} className='w-[257px] h-[635px]'></img>  */}

        <div className='absolute w-[220px] h-[590px] gap-6 flex flex-col'>

          <div className='w-fit'>
            <img className='w-[226px] h-[395px] shadow-xl' src={require(`../assets/${detail.img}`)}></img>
          </div>

          <div className='w-[213px] border-dashed border-t-4 border-gray-500 border-opacity-30'></div>

          <div className='flex flex-col gap-3 line'>

            <div className='w-[213px] h-[100px] flex flex-col items-center gap-2'>
              
              <div>
                <h2 className=' font-medium text-base'>{detail.teamName}</h2>
              </div>
              
              <div>
                <p className=' text-sm'>OCT 15 | SUN | 4:30 PM</p>
              </div>

              <div className=' text-sm text-center opacity-70'>
                {detail.venue}
              </div>

            </div>

            <div className='flex w-[213px] h-[36px] justify-center items-center bg-black'>
              <button className=' text-white text-xs'>{detail.button}</button>
            </div>

          </div>

        </div>

    </div>
  )
}
