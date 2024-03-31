import React from 'react'



function clickHandler1(){

    const items = document.querySelector(".APP");
    items.classList.add("dark-mode");

    const Card = document.querySelectorAll(".Card");
    Card.forEach((card) => card.classList.add("dark-mode"));

    const CardLast = document.querySelectorAll(".Card-Last");
    CardLast.forEach((cardlast) => cardlast.classList.add("dark-mode"));

    const adv = document.querySelector(".ADV");
    adv.classList.add("dark-mode");

    const comp2 = document.querySelector(".Comp2");
    comp2.classList.add("dark-mode");

    const LastCard = document.querySelectorAll(".LastCard");
    LastCard.forEach((lastcard) => lastcard.classList.add("dark-mode"));
}

function clickHandler2(){

    const items = document.querySelector(".APP");
    items.classList.remove("dark-mode");

    const Card = document.querySelectorAll(".Card");
    Card.forEach((card) => card.classList.remove("dark-mode"));

    const CardLast = document.querySelectorAll(".Card-Last");
    CardLast.forEach((cardlast) => cardlast.classList.remove("dark-mode"));

    const adv = document.querySelector(".ADV");
    adv.classList.remove("dark-mode");

    const comp2 = document.querySelector(".Comp2");
    comp2.classList.remove("dark-mode");

    const LastCard = document.querySelectorAll(".LastCard");
    LastCard.forEach((lastcard) => lastcard.classList.remove("dark-mode"));
}


export const SwitchButton = () => {
  return (
    <div className='flex ml-16 border-[2px] w-fit px-5 py-2 border-black gap-5'>

        <div className='border-[1px] px-3 py-1 border-black font-bold'>
            <button onClick={clickHandler1}>Dark Mode</button>
        </div>

        <div className='border-[1px] px-3 py-1 font-bold'>
            <button onClick={clickHandler2}>Light Mode</button>
        </div>

    </div>
  )
}
