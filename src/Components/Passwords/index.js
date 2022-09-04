import './index.css'

const Passwords = props => {
  const {users, deleteUser, showStatus} = props
  const {id, website, username, password} = users

  const onDeleteUser = () => {
    deleteUser(id)
  }

  const initalName = website.slice(0, 1).toUpperCase()

  return (
    <li className="list-container">
      <div className="list-name-container">
        <h1 className="initial-name">{initalName}</h1>
        <div className="dlt-icon-container">
          <div>
            <p className="website-name">{website}</p>
            <p className="user-name">{username}</p>
            {showStatus ? (
              <p className="user-password">{password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="stars-img"
              />
            )}
          </div>
          <button type="button" testid="delete" className="dlt-button" onClick={onDeleteUser}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="dlt-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default Passwords
