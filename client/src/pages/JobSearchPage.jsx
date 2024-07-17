import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import searchPng from '../assets/jobLandingPageImg/search.png'
import locationPng from '../assets/jobLandingPageImg/location.png'
import AllJobsPage from '../components/AllJobsPage'
import FilterPage from '../components/FilterPage'

const placeholderTextArray = [
  "'skill'",
  "'title'",
  "'company'",
]

const JobSearchPage = () => {

  const userLoggedIn = false

  const searchResults = 500

  const allJobs = useSelector(state => state.filterFetch)
  // console.log(allJobs)

  const [searchContentValue, setSearchContentValue] = useState('')
  const [locationContentValue, setLocationContentValue] = useState('')
  const [searchPlaceholder, setSearchPlaceholder] = useState('')
  const [searchInputErrMsg, setSearchInputErrMsg] = useState(false)
  const [locationInputErrMsg, setLocationInputErrMsg] = useState(false)
  const [clearBtnVisible, setClearBtnVisible] = useState(false)

  const jobSearchContent = useSelector((state) => state.jobSearch.searchcontent)
  const jobLocationContent = useSelector((state) => state.jobSearch.locationcontent)

  const clearTextLocationInput = () => {
    setLocationContentValue('')
    setClearBtnVisible(false)
  }

  const onChangingLocationInput = (e) => {
    setLocationContentValue(e.target.value)
    
    setClearBtnVisible(true)
  }

  const onFocusingLocationInput = () => {
    setClearBtnVisible(true)
  }

  const onClickingSearchJob = () => {
    if(searchContentValue === '') {
      setSearchInputErrMsg(true)
      setLocationInputErrMsg(false)
    }
    else if(locationContentValue === '') {
      setSearchInputErrMsg(false)
      setLocationInputErrMsg(true)
    }
    else{
      setSearchInputErrMsg(false)
      setLocationInputErrMsg(false)
    }
  }

  // place holder text changer

  const constantText = 'Search jobs by '
  let index = 0;

  useEffect(() => {
    setInterval(() => {
      setSearchPlaceholder(constantText+placeholderTextArray[index]);
      index = (index + 1) % placeholderTextArray.length;
    }, 2000)
  } 
  ,[])

  useEffect(() => {
      setSearchContentValue(jobSearchContent)
      setLocationContentValue(jobLocationContent)
  }, [])

  return (
    <div className='jobSearch-section'>
      <div className='jobSearch-section-search-bar-section'>
          <div className='jobSearch-search-bar-container'>
              <img src={searchPng}/>
              <input 
                  type="search" 
                  className="search-input-el"
                  placeholder={searchPlaceholder} 
                  value={searchContentValue} 
                  onChange={(e) => setSearchContentValue(e.target.value)}
              />
              <div className='hr-tag-landingPage-header'></div>
              <img src={locationPng} className="location-img"/>
              <input
                  type="text"
                  placeholder="Search for an area or city"
                  value={locationContentValue}
                  onChange={onChangingLocationInput} 
                  onFocus={onFocusingLocationInput}
              />
              <button className={`clear-text-locationIn-btn ${clearBtnVisible ? "clear-btn-loc-visible" : ""}`} onClick={clearTextLocationInput}>x</button>
              <button className="search-jobs-btn" onClick={onClickingSearchJob}>Search Job</button>
          </div>
          {searchInputErrMsg ? 
            <p className='error-msg'>
              Please enter a keyword to search jobs
            </p> : ''
          }
          {locationInputErrMsg ? 
            <p className='error-msg'>
              Please enter a keyword and select a location to search jobs
            </p> : ''}
      </div>
      <div className='jobSearch-filter-jobs-profileUpdate-section'>
        <h1>{`${searchResults} search results`}</h1>
        <div>
          <div className='jobSearch-filter-container'>
            <FilterPage/>
          </div>
          <div className='jobSearch-jobs-container'>
            {
                allJobs.jobs.length && (
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
