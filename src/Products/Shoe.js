import React from 'react'
import { IoIosStar } from "react-icons/io";
import './Shoe.css'

export default function Shoe(props) {
  return (
    <div className='shoe' >
      <img src={`${props.img}`} className='shoe-img' />
      <h6 className='shoe-title' >{props.title}</h6>
      <div className='reviews-rating' >
      <div className='stars' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
      <p className='reviews' >{props.reviews}</p>
      </div>
      <div className='price'>
        <p className='prev-price' >{props.prevPrice}</p>
        <p className='new-price' >{props.newPrice}</p>
      </div>
    </div>
  )
}
