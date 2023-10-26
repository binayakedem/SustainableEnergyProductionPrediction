import React ,{useState}from 'react'
import "./body.css"
import countrydata from "../Components/countries.json"
import BarChart from './BarChart'
const Body = () => {
//  either display or not  about the chart
const[val,setVal]=useState(false)

const displayChart=()=>{
setVal(true);
}


  // start for date picker
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  return (
    <div className='changing-background'>
      <div className="body-input">
        <form action="">
          <div className='inputs'>
          <label htmlFor="country" className='label-color-input'>Country</label>
          <select name="country" className="input-field">
            
            {
              countrydata.map((getcountry, index)=>(
                <option  value={getcountry.sortname} key={index}>{getcountry.country_name}</option>
              ))
            }
          </select>
          </div>

          {/* date picker start now */}
          <div className='inputs'>
      <label htmlFor="date"className='label-color-input'>date</label>
      <input
        type="date" className="input-field"
        value={selectedDate}
        onChange={handleDateChange}
      />
      {selectedDate && (  
        <p>Selected Date: {selectedDate}</p>
      )}
    </div>

        <div className="inputs">  <button type='submit'  className='btn' onClick={displayChart}>Predict Now</button></div>
        </form>
        </div>
      
        {val?<BarChart/>:null}
        {val}
    </div>
  )
}

export default Body