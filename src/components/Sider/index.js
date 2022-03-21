import {Component} from 'react'

import './index.css'

class Sider extends Component {
  render() {
    return (
      <div className="Rectangle">
        <img
          className="imglogo"
          src="https://res.cloudinary.com/teja5180/image/upload/v1647765070/logo_3x_kn2rde.png"
          alt="img"
        />
        <div className="MenuRow">
          <p className="Text">ALL DOMAINS</p>
        </div>
        <div className="name-arrow">
          <span className="Following-Domains">Following Domains</span>
          <img
            className="img-arrow"
            src="https://res.cloudinary.com/teja5180/image/upload/v1647766237/Arrow_3x_tyqqg5.png"
            alt="img"
          />
        </div>
        <p className="NameText">Video Editing</p>
        <p className="NameText">3D Animation</p>
        <p className="NameText">UI/UX Design</p>
        <p className="SeeText">See all</p>
        <div className="name-arrow">
          <span className="Following-Domains">Suggest Domains</span>
          <img
            className="img-arrow"
            src="https://res.cloudinary.com/teja5180/image/upload/v1647766237/Arrow_3x_tyqqg5.png"
            alt="img"
          />
        </div>
        <div className="link">
          <span className="NameText">JavaScript</span>
          <span className="Text-link">Follow</span>
        </div>
        <div className="link">
          <span className="NameText">Jabong</span>
          <span className="Text-link">Follow</span>
        </div>
        <div className="link">
          <span className="NameText">React</span>
          <span className="Text-Cancel">Cancel</span>
        </div>
        <p className="SeeText">See all</p>
        <div className="name-arrow">
          <span className="Following-Domains">My Posts </span>
          <span className="span6">6</span>
          <img
            className="img-arrow"
            src="https://res.cloudinary.com/teja5180/image/upload/v1647766237/Arrow_3x_tyqqg5.png"
            alt="img"
          />
        </div>
        <div className="name-arrow">
          <span className="Following-Domains">Your Pendings</span>
          <img
            className="img-arrow"
            src="https://res.cloudinary.com/teja5180/image/upload/v1647766237/Arrow_3x_tyqqg5.png"
            alt="img"
          />
        </div>
        <div className="link">
          <span className="NameText">JavaScript</span>
          <span className="Text-link">Follow</span>
        </div>
        <div className="link">
          <span className="NameText">JavaScript</span>
          <span className="Text-link">Follow</span>
        </div>
        <div className="link">
          <span className="NameText">JavaScript</span>
          <span className="Text-link">Follow</span>
        </div>
      </div>
    )
  }
}

export default Sider
