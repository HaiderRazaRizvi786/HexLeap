import React from 'react'

export const Card1 = ({detail}) => {
  return (
    <div className='h-[511px] w-[238px] flex flex-col gap-5 shadow-md justify-center items-center Card'>
        
        <div className='w-[218px] h-[385px] mt-3 object-fill'>
          <img alt="athelete" src={require(`../assets/${detail.img}`)} className='w-[218px] h-[385px]'></img>
        </div>

        {/* className='w-[218px] h-[385px]' */}


        <div className='w-[187px] h-[21px] mr-7 font-medium'>
          <h2>{detail.teamName}</h2>
        </div>

        <div className=' flex w-[218px] h-[54px] mb-3 justify-center items-center rounded-sm bg-slate-100 Card-Last'>

          <div className='w-[167px] h-[31px] justify-between flex mr-5'>

            <div className='flex flex-col w-[70px] h-[31px] justify-center items-center'>
              <span className=' font-normal text-xs opacity-70'>Total Events</span>
              <span className=' font-medium text-sm'>{detail.totalEvents} Events</span>
            </div>

            <div className='flex flex-col w-fit h-[31px] justify-center items-center'>
              <span className=' font-normal text-xs opacity-70'>Sports</span>
              <span className=' font-medium text-sm'>{detail.sport}</span>  
            </div>

          </div>

        </div>



    </div>
  )
}
