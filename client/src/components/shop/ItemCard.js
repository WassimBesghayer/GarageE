import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/itemSlice'


function ItemCard({item}) {
    console.log(item)
    const dispatch = useDispatch()

  return (
    <div className='carteArticles'>
        <img src={item.item_imageUrl} style={{minWidth:"250px", maxWidth:"250px", minHeight:"250px", maxHeight:"250px"}}/>
        <h5>{item.item_title}</h5>
        <p>{item.unit_price}</p>
        <button onClick={()=>dispatch(deleteItem({item_title:item.item_title}))}>X</button>
    </div>
  )
}

export default ItemCard