//Import styling
import "./topbar.css"

export default function TopBar() {
  return (
  <div className="top">
    <div className="topLeft">
       <div className="logo"></div>
       <h3>Vocal Dupe</h3>
    </div>
    <div className="topCenter">
      <ul className="topbar-list">
            <li>Home</li>
            <li>Top Stories</li>
            <li>Communities</li>
            <li>Challenges</li>
            <li>Resources</li>
        </ul>
    </div>
      <div className="topRight">
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-bell"></i>
        <button className="create-story">Create Story</button>
        <div className="profile-picture"></div>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
  </div>
  )
}
