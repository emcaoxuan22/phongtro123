import React from 'react'
import {text} from "../ultils/dataIntro"
import icons from '../ultils/icons'
import {Button} from "../components"
const {GrStar,} =icons
const star = [1,2,3,4,5]
function Intro() {
  return (
    <div className='w-3/5 bg-white rounded-md shadow-md p-4 flex flex-col items-center gap-4'>
      <h3 className='font-semibold text-lg'>{text.title}</h3>
      <p className='text-gray text-center my-4'>{text.description} {text.description2}</p>
      <div className='w-full flex justify-around items-center my-4'>
        {text?.statistic?.map((item, index) => {
          return <div className='flex flex-col  items-center' key={index}>
            <h4 className='font-semibold'>{item.value}</h4>
            <p>{item.name}</p>
          </div>
        })}
      </div>
      <h3 className='font-semibold text-lg'>{text.price}</h3>
      <div className='flex justify-center'>
        {
          star.map((item, index)=>{
            return <GrStar className='text-yellow-300 text-lg' size={24} key={index}/>
          })
        }

      </div>
      <p className='text-gray text-center italic'>{text.comment}</p>
      <p className='text-center'>{text.author}</p>
      <h3 className='font-semibold text-lg'>{text.question}</h3>
      <p className='text-center'>{text.answer}</p>
      <Button text="DANG KY NGAY" textColor="text-white" bgColor="bg-secondary2"/>
    </div>
  )
}

export default Intro