import React from "react"
import GitHubIcon from "../images/github-icon.svg"

const Header = () => {
  return (
    <div style={{
      marginBottom: `20px`,
      padding: 20,
      margin: `0 auto`,
      maxWidth: 1200,
      display: `flex`,
      justifyContent: `space-between`
    }}>
      <h2>Header</h2>
      <a href="">
        <div style={{
          width: 30,
        }}>
          <img
            src={GitHubIcon}
            alt="githubicon"
            width="100%"
          />
        </div>
      </a>
    </div>
  )
}


export default Header
