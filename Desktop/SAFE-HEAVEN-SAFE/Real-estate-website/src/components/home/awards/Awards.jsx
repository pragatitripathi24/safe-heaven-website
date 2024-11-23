import React from "react";
import Heading from "../../common/Heading";
import CountUp from "react-countup";
import "./awards.css";

// Data for statistics
const statistics = [
  { id: 1, name: "Active Cases", count: 1500 },
  { id: 2, name: "Children Found & Reunited", count: 1200 },
  { id: 3, name: "Monthly/Weekly Case Progress", count: 75 },
  { id: 4, name: "New Cases This Month/Week", count: 50 },
];

const Awards = () => {
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          <Heading
            title='Real-Time Child Welfare Statistics'
            subtitle='Tracking our efforts to reunite children'
          />

          <div className='content grid4 mtop'>
            {statistics.map((stat, index) => (
              <div className='box' key={index}>
                {/* Box with gray background */}
                <div className='stat-box'>
                  <div className='icon'>
                    {/* Icon */}
                    <span>🏆</span>
                  </div>
                  <h1>
                    <CountUp start={0} end={stat.count} duration={2.5} />
                  </h1>
                  <p>{stat.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
