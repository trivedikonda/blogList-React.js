// Write your JS code here
import './index.css'

const UserInfo = () => (
  <div className="user-info-container">
    <img
      height={80}
      width={80}
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
      alt="profile"
    />
    <h1 className="profile-name">Wade Warren</h1>
    <p className="profile-designation">Software developer at UK</p>
  </div>
)

export default UserInfo
