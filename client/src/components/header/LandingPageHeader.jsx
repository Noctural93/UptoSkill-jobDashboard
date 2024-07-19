import { Link } from 'react-router-dom'
import dropDownPng from '../../assets/dropdown.png'
import {useDispatch} from 'react-redux'
import { togglePopup } from '../../features/loginpopup/loginpopupSlice'
import hamburger from '../../assets/icons-hamburger.png'

const LandingPageHeader = () => {

    const dispatch = useDispatch()
    const onClickingcandidateLogin = () => {
        dispatch(togglePopup())
    }

  return (
    <nav className="nav-bar">
        <div className="nav-bar-container">
            <div className="nav-bar-container-options">
                <img src={hamburger} alt='hamburger-icon'/>
                <Link to='/'>
                    <img src="https://uptoskills.com/wp-content/uploads/2023/04/hd-logo-iguru.png" alt="logo"/>
                </Link>
                {
                    window.location.pathname !== '/' && (
                        <Link to='/'>Home</Link>
                    )
                }
                <div className="nav-links-container">
                    <ul className="nav-links-items-list">
                        <li className="nav-links-item">
                            <a href="#">Job 
                                <img className="drop-down-img" src={dropDownPng}/>
                            </a>
                            <div className="dropdown-container">
                                <ul className="dropdown-list">
                                    <li><a href="#">Work From Home</a></li>
                                    <li><a href="#">Work From Home</a></li>
                                    <li><a href="#">Work From Home</a></li>
                                    <li><a href="#">Work From Home</a></li>
                                    <li><a href="#">Work From Home</a></li>
                                </ul>
                                
                                {/* <!-- line break --> */}
                                
                                <hr className='hr-tag-landingPage-header'/>

                                <ul className="dropdown-sub-list">
                                    <li>
                                        <a href="#">Work From Home 
                                            <img className="drop-down-img" src={dropDownPng}/>
                                        </a>
                                        <div className="dropdown-sub-container">
                                            <ul>
                                                <li>
                                                    <a href="#">drop drop 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 1</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Work From Home 
                                            <img className="drop-down-img" src={dropDownPng}/>
                                        </a>
                                        <div className="dropdown-sub-container">
                                            <ul>
                                                <li>
                                                    <a href="#">drop drop 2</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 2</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 2</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 2</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Work From Home 
                                            <img className="drop-down-img" src={dropDownPng}/>
                                        </a>
                                        <div className="dropdown-sub-container">
                                            <ul>
                                                <li>
                                                    <a href="#">drop drop 3</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 3</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 3</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 3</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Work From Home
                                            <img className="drop-down-img" src={dropDownPng}/>
                                        </a>
                                        <div className="dropdown-sub-container">
                                            <ul>
                                                <li>
                                                    <a href="#">drop drop 4</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 4</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 4</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 4</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Work From Home
                                            <img className="drop-down-img" src={dropDownPng}/>
                                        </a>
                                        <div className="dropdown-sub-container">
                                            <ul>
                                                <li>
                                                    <a href="#">drop drop 5</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 5</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 5</a>
                                                </li>
                                                <li>
                                                    <a href="#">drop drop 5</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-links-item">
                            <a href="#">Career Compass 
                                <img className="drop-down-img" src={dropDownPng}/>
                            </a>
                            <div className="dropdown-container career-dropdown">
                                <ul className="dropdown-list">
                                    <li>
                                        <a href="/resume-builder">
                                            AI Resume Builder
                                        </a>
                                    </li>
                                    <li><a href="#">Work From Home</a></li>
                                    <li><a href="#">Work From Home</a></li>
                                    <li><a href="#">Work From Home</a></li>
                                    <li><a href="#">Work From Home</a></li>
                                </ul>
                                <hr className='hr-tag-landingPage-header'/>
                                <div className="watch-video-container">
                                    <img src="" alt=""/>
                                    <button>Watch video</button>
                                </div>
                            </div>
                        </li>
                        <li className="nav-links-item">
                            <a href="#">Community 
                                <img className="drop-down-img" src={dropDownPng}/>
                            </a>
                            <div className="dropdown-container community-dropdown">
                                <ul className="dropdown-list">
                                    <li><a href="#">Work From Home</a></li>
                                    <li><a href="#">Work From Home</a></li>
                                </ul>
                                <hr className='hr-tag-landingPage-header'/>
                                <div className="watch-video-container">
                                    <img src="" alt=""/>
                                    <button>Watch video</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="login-buttons-container">
                <Link to="/employer-login" target='_blank' style={{border: 'none', outline: 'none'}}>
                    <button className="employer-btn">Employer Login</button>
                </Link>
                <button className="candidate-btn" onClick={onClickingcandidateLogin}>Candidate Login</button>
            </div>
            <img src={hamburger} alt='hamburger-icon' className='mobile-ham-icon'/>
        </div>
    </nav>
  )
}

export default LandingPageHeader
