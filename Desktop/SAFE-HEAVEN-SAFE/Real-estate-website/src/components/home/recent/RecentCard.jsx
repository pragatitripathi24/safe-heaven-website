import React from "react"
import { successStories } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {successStories.map((val, index) => {
          const { cover, title, location, description } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: "#25b5791a", color: "#25b579" }}>Success Story</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{title}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
                <p>{description}</p>
              </div>
              <div className='button flex' style={{backgroundColor :"#962145"}}>
                <div>
                  <button className='btn2' style={{backgroundColor:"WHITE", color :"BLACK"}}>Read More</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard;
