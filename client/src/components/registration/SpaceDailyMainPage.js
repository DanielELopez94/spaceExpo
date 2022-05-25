import React, { useEffect, useState } from "react";

const SpaceDailyMainPage = (props) => {
  const [dailyImage, setDailyImage] = useState({})

  const getDailySpaceImage = async () => {

    try {
      const response = await fetch(`/api/v1/dailyImage`)
        if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw (error)
      } 
      const body = await response.json()

    setDailyImage(body)
    } catch (error) {
      console.error(`${error.message}`)
    }
  }

  useEffect(() => {
    getDailySpaceImage()
  }, [])


  return (
  
    <div className="text-body" >
    
        <div className="body">
          <img className="image" src={dailyImage.hdurl}/>
          </div>

        <div className="explanation">
          <h3>
            {dailyImage.copyright}
          </h3>
          <h4>
            {dailyImage.date}
          </h4>
          <h5>
            {dailyImage.explanation}
          </h5>
          </div>
          
        
    </div>
  )
}

export default SpaceDailyMainPage