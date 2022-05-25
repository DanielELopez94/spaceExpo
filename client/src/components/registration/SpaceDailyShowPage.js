import React, { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const SpaceDailyShowPage = (props) => {

  const [startDate, setStartDate] = useState(new Date());

  const getDailySpaceImage = async () => {
    try {
      const response = await fetch(`/api/v1/dailySpaceImage`)
        if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw (error)
      } 
      const body = await response.json()
    setStartDate(body)
    } catch (error) {
      console.error(`${error.message}`)
    }
  }

  useEffect(() => {
    getDailySpaceImage()
  }, [])

  const handleDateSelect = (date) => {
    setStartDate(date)
  }

  const handleDateChange = (date) => {
  setStartDate({
    ...startDate,
    [date.currentTarget.onSelect]: date.currentTarget.onChange
  })
}

  return (
    <div className="text-body">
    <DatePicker
      selected={startDate}
      onSelect={handleDateSelect} 
      onChange={handleDateChange} 
    />
    </div>
  )
}

export default SpaceDailyShowPage 