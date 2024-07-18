import companyLogo from '../assets/jobSearchPageImg/Company_icon.png'
import locationLogo from '../assets/jobSearchPageImg/icon-location.png'
import salaryLogo from '../assets/jobSearchPageImg/icon-salary.png'
import workFromOffice from '../assets/jobSearchPageImg/Work-from-office.png'

const sign=">";

const AllJobsPage = ({jobsdata}) => {
  // console.log(jobsdata)
  return(
    <div className='job-card-container'>
      <div className='job-title-container'>
        <div>
          <img src={companyLogo} alt='company-logo'/>
          <h1>{jobsdata.title}</h1>
        </div>
        <span>{sign}</span>
      </div>
      <div className='job-location-container'>
        <img src={locationLogo} alt='location-icon'/>
        <p>{jobsdata.location}</p>
      </div>
      <div className='job-salary-container'>
        <img src={salaryLogo} alt='salary-icon'/>
        <p>{`₹ ${jobsdata.salary} monthly`}</p>
      </div>
      <div className='job-work-type-shift-experience-container'>
        {
          jobsdata.workMode.map(item => (
            <span key={item} className='job-details-box'>
              <img src={workFromOffice} alt='work-from-office-logo'/>
              {item}
            </span>
          ))
        }
        {
          jobsdata.workType.map(item => (
            <span key={item} className='job-details-box'>
              {item}
            </span>
          ))
        }
        {
          jobsdata.workShift.map(item => (
            item !== 'Day shift' && (
              <span key={item} className='job-details-box'>
                {item}
              </span>
            )
          ))
        }
        {
          (jobsdata.experience === '21') && (
            <span className='job-details-box'>Any Experience</span>
          )
          (jobsdata.experience === '21') && (jobsdata.experience !== '0') ? 
            (
              <span className='job-details-box'>{`Min. ${jobsdata.experience} year`}</span>
            )
            : 
            (
              <span className='job-details-box'>Fresher only</span>
            )
        }
        {
          <span className='job-details-box'>{jobsdata.englishLevel}</span>
        }
      </div>
    </div>
  )
}

export default AllJobsPage


// return (
//   <div className="Box">
//     <div>
//       <div className="box1">
//         <div className="web">
//         <img className="webimg" src= {item1[0]} alt="image1" />
//           <pre><h4>{jobsdata.title}</h4>
//           {/* <p id="pid">{item1[2]}</p> */}
//             </pre>
//           <button className='btn'>{sign}</button>
//         </div>
//         <div className="flex">
//             <i className="fa-solid fa-location-dot"></i>
//             <p>{jobsdata.location}</p>
//         </div>
//         <div className="flex2">
//             <i className="fa-regular fa-money-bill-1"></i>
//             <p>{jobsdata.salary}</p>
//         </div>
//         <div className="main2">
//             <div className="div1">
//             <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Work%20from%20office_xxhdpi.webp" alt="image2"/>
//             {jobsdata.workMode.map(item => (
//               <p key={item}>{item}</p>
//             ))}
//             </div>
//             <div className="div1">
//                 <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Full%20time_xxhdpi.webp" alt="image3" />
//                 {jobsdata.workType.map(item => (
//                   <p key={item}>{item}</p>
//                 ))}
//             </div>
//             <div className="div1">
//                 <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Experience_xxhdpi.webp" alt="image4" />
//                 <p>{jobsdata.experience}</p>
//             </div>
//             <div className="div1">
//                 <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Advanced%20English_xxhdpi.webp" alt="image5"/>
//                 <p>{jobsdata.englishLevel}</p>
//             </div>
//         </div>
//         <div className="walk">
//                 <img src={walk} alt="image6" />
//                 <p>
//                     Walk-in interview</p>
//         </div>     
//       </div>
//     </div>
//   </div>
// )