import React, { useState } from 'react'
import AddItem from './shop/AddItem'
import ItemCard from './shop/ItemCard'
import item from '../redux/itemSlice'


function Shop() {
  return (
    <div>
      <h2>Let's do some shopping: </h2>
      <div> <ItemCard/> </div>
      <div> <AddItem/> </div>
      <div className='item-container'>
        {item.map((el)=><ItemCard item={el}/>)}
      </div>

    </div>
  )
}

export default Shop