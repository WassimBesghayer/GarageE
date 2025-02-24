import React, { useState } from 'react'
import ItemCard from './ItemCard'
import AddItem from './Ad'
import { useSelector } from 'react-redux'

function ItemList() {
  const items=useSelector((state)=>state.item.ItemList)

  return (
  <div>
    <div><AddItem/></div>
    <div className='parent'>
       {items.map((el)=><ItemCard item={el}/>)}
    </div>
  </div>
  )
}

export default ItemList