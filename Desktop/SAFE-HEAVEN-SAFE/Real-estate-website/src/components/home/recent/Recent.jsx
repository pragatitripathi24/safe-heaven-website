import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Success Stories' subtitle='Discover how we have made a difference in the lives of children and families.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent;
