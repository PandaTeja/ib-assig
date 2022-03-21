import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="Rectangle">
        <div className="field">
          <div className="place">
            <BsSearch className="icon" />
            <span className="search">Search</span>
          </div>
        </div>
        <div className="PrimaryDefault">
          <p className="Write-Post">Write Post</p>
        </div>
        <img
          className="img-PersonM"
          src="https://res.cloudinary.com/teja5180/image/upload/v1647775991/M_3x_gwfbkq.png"
          alt="img"
        />
      </div>
    )
  }
}
export default Header
