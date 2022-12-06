import React from 'react'
import { useParams } from 'react-router-dom'

function ItemList() {
  const {id}=useParams()
  return (
    <div>
      <h1>Detalles del producto</h1>
      <img src="iphone 11.jpg" alt="" />
    </div>
  )
}

export default ItemList