import React from 'react'
import Star from './star-war'
import NewHope from './New-Hope'
import Emipire from './Emipire'
import Return from './Return'
import Phantom from "./Phantom"
import Attack from './Attack'
import REvenge from './REvenge'
import '../style/style.css'


const Card = () => {
  return (
    <div>
      <Star/>
      <NewHope/> 
      <Emipire/>
      <Return/>
      <Phantom/>
      <Attack/>
      <REvenge/>
    </div>
  )
}

export default Card
