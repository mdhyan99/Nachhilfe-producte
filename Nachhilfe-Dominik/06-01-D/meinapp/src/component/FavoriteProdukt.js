import React from 'react'
import data from '../data/data.json'
const FavoriteProdukt = () => {
    const filterFavoriteProdukt = data.filter((el) => el.favorite )
  return (
    <div>
      {
        filterFavoriteProdukt.map((item)=>{
           return item.id
        })
      }  
  

    </div>
  )
}

export default FavoriteProdukt