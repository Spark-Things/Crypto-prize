import React from 'react';
import '../Components/Coin.css';
export const Coin = ({name,image,symbol,volumn,price,pricechange,marketcap}) => {
  return (
    <div className='coin-container'>
         <div className='coin-row'> 
           <div className='coin'>
            <img src={image}  />
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
           </div>
           <div className='coin-data'>
               <p className='coin-price'>${price}</p>
               {
                  pricechange< 0 ? (
                   <p className='coin-percent red'>{pricechange.toFixed(2)}%</p>
                 ) : ( <p className='coin-percent green'>{pricechange.toFixed(2)}%</p>)
               }
               <p className='coin-volumn'>${volumn.toLocaleString()}</p>
               <p className='coin-marketcap'>
                 ${marketcap.toLocaleString()}
               </p>
           </div>
         </div>
      </div>
  )
}
