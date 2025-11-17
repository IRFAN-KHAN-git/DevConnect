import React from 'react'
import './catogery.css'
const CatogeryCard = ({categories}) => {
  return (
    <div className='catogeryCard'>
        
            {categories.map((item,index)=>(
                <button key={index} className='catogeryButton'>
                    <div className='icon'>
                        {item.icon}
                    </div>
                    <div>
                        <div className='nam'>{item.name}</div>
                        <div className='num'>{item.count}</div>
                    </div>
                </button>
            ))}
        
    </div>
  )
}

export default CatogeryCard