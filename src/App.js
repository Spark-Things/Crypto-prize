import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import './Components/Coin.css';
import { Coin } from './Components/Coin';

function App() {

    const [coin, setCoin] = useState([]);
    const [search, setSearch] = useState([]);
     
   useEffect(() => {
     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
     .then(
       res =>{
         console.log(res);
         setCoin(res.data);
       } 
     )
     .catch(
       err =>{
         console.log(err);
       }
     )
   }, []);
   
   const handleChange = e =>{
     setSearch(e.target.value);
   } 
    
  //  filter for coins 

   console.log(coin);
  const filtererdCoins = coin.filter(coins =>
        (coins.name.toLowerCase().includes(search))
  );
    
  return (
    <div className="coin-app">
       
      <div className='coin-search'>
        <h1>Crypto-prize List</h1>
        <p style={{"marginTop":"10px"}}>Displaying Currant Prizes of Crypto Currancy From API</p>
        <div>
           <span className='spark'>Created By Spark </span>
       </div>
         <form>
            <input type="text" placeholder="Search" className='coin-input' onChange={handleChange}/>
         </form>
      </div>
      <div className='coin-row'> 
           <div className='coin'>
           <span className='ext'></span>
            <h1 className='grey'>Name</h1>
            <p className='coin-symbol grey' style={{"textTransform":"capitalize"}}>Symbol</p>
           </div>
           <div className='coin-data'>
               <p className='coin-price grey'>Price</p>
               <p className='coin-percent grey'>Percent</p>
               <p className='coin-volumn grey'>Volumn</p>
               <p className='coin-marketcap grey'> Market-cap</p>
           </div>
         </div>
         {filtererdCoins.map(coins =>
              (
                <Coin key={coins.id} 
                      name={coins.name}
                      image={coins.image}
                      symbol={coins.symbol}
                      marketcap={coins.market_cap}
                      price={coins.current_price}
                      pricechange={coins.price_change_percentage_24h}
                      volumn={coins.total_volume}
                />
              )
          )}   
    </div>
  );
}

export default App;
