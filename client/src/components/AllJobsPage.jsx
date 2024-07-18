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
      <div className='job-location-salary-container'>
        <img src={locationLogo} alt='location-icon'/>
        <p>{jobsdata.location}</p>
      </div>
      <div className='job-location-salary-container'>
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
          (jobsdata.experience !== '21') && (jobsdata.experience === '0') ? 
            (
              <span className='job-details-box'>Fresher only</span>
            )
            : 
            (
              <span className='job-details-box'>{`Min. ${jobsdata.experience} year`}</span>
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