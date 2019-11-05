import PropTypes from "prop-types"
import React from "react"

import Lines from "../images/3lines.png"
import YoutubeLogo from "../images/youtubeLogo.png"
import Camera from "../images/camera.png"

const Header = ({ siteTitle }) => (
  <header
    className="row"
    style={{
      background: `#282828`,
      margin: "0 4px 0 0",
      height: "56px",
      padding: "0 8px",
    }}
  >
    <div
      style={{
        margin: "0 4px 0 0",
        padding: "8px 8px 8px 8px",
        width: "40px",
        height: "40px",
        boxSizing: "border-box",
      }}
    >
      <img alt="" src={Lines} />
    </div>
    <div
      style={{
        margin: "0 4px 0 0",
        padding: "8px 8px 8px 8px",
        boxSizing: "border-box",
      }}
    >
      <img alt="" src={YoutubeLogo} />
    </div>

    <div      
      style={{
        margin: "0 4px 0 0",
        padding: "8px 8px 8px 8px",
        boxSizing: "border-box",
      }}>
      <input type="text" placeholder="Search"></input>
      <button>Enter</button>
    </div>

    <div
      style={{
        margin: "0 4px 0 0",
        padding: "8px 8px 8px 8px",
        boxSizing: "border-box",
      }}
    >
      <img alt="" src={Camera} />
    </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
