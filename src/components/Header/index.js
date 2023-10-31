import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-large-view-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <ul className="nav-large-items-list">
        <li className="nav-large-items">Home</li>
        <li className="nav-large-items">Jobs</li>
      </ul>
      <button className="logout-button" type="button">
        Logout
      </button>
    </div>
    <div className="nav-mobile-view-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <ul className="nav-large-items-list">
        <li className="nav-large-items">Home</li>
        <li className="nav-large-items">Jobs</li>
      </ul>
      <button className="logout-button" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
