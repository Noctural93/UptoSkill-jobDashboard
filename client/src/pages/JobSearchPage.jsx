import { useSelector } from 'react-redux'

import AllJobsPage from '../components/AllJobsPage'
import FilterPage from '../components/FilterPage'
import NoJobsFoundPage from '../components/NoJobsFoundPage'
import SearchAndLocationBar from '../components/SearchAndLocationBar'

const JobSearchPage = () => {

  const userLoggedIn = false
  
  const allJobs = useSelector(state => state.filterFetch)

  const searchResults = 500

  // console.log(allJobs)

  return (
    <div className='jobSearch-section'>
      <SearchAndLocationBar/>
      <div className='jobSearch-filter-jobs-profileUpdate-section'>
        <div className='jobSearch-no-of-jobs-heading'>
          <h1>{`${searchResults} search results`}</h1>
        </div>
        <div>
          <div className='jobSearch-filter-container'>
            <FilterPage/>
          </div>
          <div className='jobSearch-jobs-container'>
            {
                allJobs.jobs.length === 0 ? (
                  <NoJobsFoundPage/>
                ) : (
                  allJobs.jobs.map(item => (
                    <AllJobsPage key={item._id} jobsdata={item}/>
                  ))
                )
            }


          </div>
          {userLoggedIn ? (
            <div className='jobSearch-profileEdit-card'>
              ProfileUpdateCard
            </div>
          ) : (
            <div className='jobSearch-userLogin-card'>
              userLoginCard
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobSearchPage
