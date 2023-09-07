import React from 'react'
import {text} from "../ultils/dataContact"
import {Button} from "../components"
function Contact() {
  return (
    <div className='w-3/5 border border-green-500 flex flex-col items-center gap-4'>
      <img src={text.image} alt="" className='w-full h-48 object-contain' />
      <p>{text.content}</p>
      <div className='flex w-full justify-around'>
        {text?.contacts?.map((item, index) => {
          return <div className='flex flex-col items-center' key={index}>
            <span className='text-orange-600 font-semibold text-sm'>{item.text}</span>
            <span className='font-semibold text-lg'>{item.phone}</span>
            <span className='font-semibold text-lg'>{item.zalo}</span>
          </div>
        })}
      </div>
      <Button text="Gui lien he" textColor="text-white" bgColor="bg-secondary1"/>
    </div>
  )
}

export default Contact