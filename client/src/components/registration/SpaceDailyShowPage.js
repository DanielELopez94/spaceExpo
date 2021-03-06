import React, { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const SpaceDailyShowPage = (props) => {

  const [pickedDate, setPickedDate] = useState(new Date());
  const [imageData, setImageData] = useState({})

  const getDailyStartDate = async () => {
    const formattedDate = pickedDate.toISOString().substring(0, 10)
    try {
      const response = await fetch(`/api/v1/dailyImage/${formattedDate}`)
        if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw (error)
      } 
      const body = await response.json()
      console.log(body)
      setImageData(body)
    } catch (error) {
      console.error(`${error.message}`)
    }
  }

  useEffect(() => {
    getDailyStartDate()
  }, [])

const handleDateChange = (date) => {
  setPickedDate(date)
}

const handleShowImageButton = (event) => {
  event.preventDefault()
  getDailyStartDate()
}

// function called showImage
// function is invoking  getDailyStartDate()

  return (

    <div className="text-body"> 
    <div className="date-picker">
    <div className="select-date">Select Date:</div>
    <DatePicker
      selected={pickedDate}
      onChange={handleDateChange}
    />
      </div>  
      <button className="sign" type="button" onClick={handleShowImageButton}>Submit Date</button>
    <div>
      <div>
        <img className="image" src={imageData.hdurl}/>
      </div>

      <div className="explanation">
          <h3>
            {imageData.copyright}
          </h3>
          <h4>
            {imageData.date}
          </h4>
          <h5>
            {imageData.explanation}
          </h5>
          </div>
      </div>
      
    {/* // button with onClick, oClick have a function (handleShowImage) */}
    </div>
  )
}

export default SpaceDailyShowPage 