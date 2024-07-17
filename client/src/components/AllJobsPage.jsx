import React from 'react'

import image1 from "../assets/jobSearchPageImg/image1.png";
import image2 from "../assets/jobSearchPageImg/logo2.avif";
import image3 from "../assets/jobSearchPageImg/logo3.avif";
import image4 from "../assets/jobSearchPageImg/logo4.avif";
import walk from "../assets/jobSearchPageImg/walk.avif";

let item1=[image1,"Web Developer","Lustre Tuff Glass","Kishan Bagh, Gwalior"
  ,"₹13,000 - ₹18,000 monthly","Any experience"
];
let item2=[image2,"Web Developer","Care Health Nurses Private Limited","Haibatpur, Ghaziabad","₹12,000 - ₹18,000 monthly",
  "Min.1Year"
];
let item3=[image3,"Web Developer","Darshan Home Nursing Service","Banashankari, Bengaluru/Bangalore","₹5,000 - ₹10,000 monthly",
  "Min. 3 Year"
];
let item4=[image4,"React Native Developer","Khelo T20","Mohali","₹40,000 - ₹70,000 monthly","Min. 3 Year"];

const sign=">";

const AllJobsPage = ({jobsdata}) => {
  // console.log(jobsdata)
  return (
    <div className="Box">
      <div>
        <div className="box1">
          <div className="web">
          <img className="webimg" src= {item1[0]} alt="image1" />
            <pre><h4>{jobsdata.title}</h4>
            {/* <p id="pid">{item1[2]}</p> */}
              </pre>
            <button className='btn'>{sign}</button>
          </div>
          <div className="flex">
              <i className="fa-solid fa-location-dot"></i>
              <p>{jobsdata.location}</p>
          </div>
          <div className="flex2">
              <i className="fa-regular fa-money-bill-1"></i>
              <p>{jobsdata.salary}</p>
          </div>
          <div className="main2">
              <div className="div1">
              <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Work%20from%20office_xxhdpi.webp" alt="image2"/>
              {jobsdata.workMode.map(item => (
                <p key={item}>{item}</p>
              ))}
              </div>
              <div className="div1">
                  <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Full%20time_xxhdpi.webp" alt="image3" />
                  {jobsdata.workType.map(item => (
                    <p key={item}>{item}</p>
                  ))}
              </div>
              <div className="div1">
                  <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Experience_xxhdpi.webp" alt="image4" />
                  <p>{jobsdata.experience}</p>
              </div>
              <div className="div1">
                  <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Advanced%20English_xxhdpi.webp" alt="image5"/>
                  <p>{jobsdata.englishLevel}</p>
              </div>
          </div>
          <div className="walk">
                  <img src={walk} alt="image6" />
                  <p>
                      Walk-in interview</p>
          </div>     
        </div>
      </div>
    </div>
  )
}

export default AllJobsPage
