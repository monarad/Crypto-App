import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/TableCoin'
import { getCoinList } from '../services/cryptoAPI'
import Pagination from '../modules/Pagination'
import Search from '../modules/Search'
import Chart from '../modules/Chart'

function HomePage() {
    const[coins,setCoins]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[page,setPage]=useState(1)
    const[currency,setCurrency]=useState("usd")
    const[chart,setChart]=useState(null)


    useEffect(()=>{
        setIsLoading(true)
        const getData=async()=>{
          try {
            const res=await fetch(getCoinList(page,currency));
            const json=await res.json();
            setCoins(json);
            setIsLoading(false)
            
          } catch (error) {
            console.log(error)
          }
           
        }
        getData()
        // fetch(getCoinList())
        // .then(res=>res.json())
        // .then(json=>setCoins(json))
    },[page,currency])
   
  return (
    <div>
      {/* {isLoading ? <p>LOOOOding</p>:<TableCoin coins={coins} />} */}
     <Search currency={currency} setCurrency={setCurrency}/>
      <TableCoin coins={coins} isLoading={isLoading} setChart={setChart}/>
      <Pagination page={page} setPage={setPage}/>
      {!!chart && <Chart chart={chart} setChart={setChart}/>}
      
    
      </div>
  )
}

export default HomePage