import React,{useState,useEffect} from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import './barchart.css'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)
const BarChart = () => {
    const[chart,setChart]=useState([])
    var baseUrl="https://api.coinranking.com/v2/coins/?limit=4"
    var proxyUrl='https://cors-anywhere.herokuapp.com/'
    var api="coinrankingaad4484af29188c3b5fe981e9c78c65c183698d0e90a3e98"

useEffect(()=>
{
    const fetchCoin=async ()=>{
        await fetch(`${proxyUrl}${baseUrl}`,{
            method:'Get',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':`${api}`,
                'Access-Control-Allow-Origin':'*'
            }
        }
        
        ).then((response)=>{
            response.json().then((json)=>{
                console.log(json)
                setChart(json.data)
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    fetchCoin()
},[baseUrl,proxyUrl,api])
console.log("chart",chart);
    const data = {
        labels: chart?.coins?.map(x=>x.name),
        datasets: [
          {
            label: `${chart?.coins?.length} Coin available`,
            data: chart?.coins?.map(x=>x.price),
            backgroundColor: [
               'blue', 'yellow', 'green', 'purple'
            ],
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    
  return (
    <div className='main-chart'>
        <Bar
        data={data}
        options={options}
        />

    </div>
  )
}

export default BarChart