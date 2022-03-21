import {Component} from 'react'

import './index.css'

class DetailView extends Component {
  render() {
    const {userDetails} = this.props
    const {title, comments_count, profile_pic} = userDetails
    return (
      <div className="head-text">
        <div className="head-image">
          <img
            className="imgTask"
            src="https://res.cloudinary.com/teja5180/image/upload/v1647842544/1_3x_ohukbk.png"
            alt="Freedom Blog"
          />
        </div>
        <div className="text-on-image">
          <h3> {title}</h3>
        </div>
        <div>
          <img className="imgDP" src={profile_pic} alt="img" />
        </div>
        <div className="icon_msg">
          <img
            className="msg"
            src="https://res.cloudinary.com/teja5180/image/upload/v1647856532/Icon_3x_hrxpfv.png"
            alt="img"
          />
          <span className="head-text">{comments_count}</span>
        </div>
        <div className="PrimaryDefault">
          <button className="Write-Post">Approve</button>
        </div>
      </div>
    )
  }
}

export default DetailView
