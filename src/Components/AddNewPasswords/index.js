import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Passwords from '../Passwords'

import './index.css'

class AddNewPasswords extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    userList: [],
    searchInput: '',
  }

  deleteUser = id => {
    const {userList} = this.state
    const filterUserList = userList.filter(eachUser => eachUser.id !== id)
    this.setState({userList: filterUserList})
  }

  websiteNameType = event => {
    this.setState({websiteInput: event.target.value})
  }

  userNameType = event => {
    this.setState({usernameInput: event.target.value})
  }

  passwordType = event => {
    this.setState({passwordInput: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    if (websiteInput !== '' && usernameInput !== '' && passwordInput !== '') {
      const newUserList = {
        id: uuidv4(),
        website: websiteInput,
        username: usernameInput,
        password: passwordInput,
      }
      this.setState(prevState => ({
        userList: [...prevState.userList, newUserList],
        websiteInput: '',
        usernameInput: '',
        passwordInput: '',
      }))
    }
  }

  onShowPasswordView = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  getFilteredUserList = () => {
    const {userList, searchInput} = this.state
    const filteredList = userList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredList
  }

  onSearchWebsite = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const filteredUserList = this.getFilteredUserList()
    const {
      userList,
      usernameInput,
      websiteInput,
      passwordInput,
      showPasswords,
    } = this.state
    const passwordsCount = userList.length
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="bg-card">
          <div className="image-container">
            <div className="form-card">
              <h1 className="password-heading">Add New Passwords</h1>
              <form className="form-container" onClick={this.onClickAdd}>
                <div className="img-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-icons"
                  />
                  <div>
                    <input
                      type="text"
                      className="input-ele"
                      placeholder="Enter Website"
                      onChange={this.websiteNameType}
                      value={websiteInput}
                    />
                  </div>
                </div>
                <div className="img-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-icons"
                  />
                  <div>
                    <input
                      type="text"
                      className="input-ele"
                      placeholder="Enter Username"
                      onChange={this.userNameType}
                      value={usernameInput}
                    />
                  </div>
                </div>
                <div className="img-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-icons"
                  />
                  <div>
                    <input
                      type="password"
                      className="input-ele"
                      placeholder="Enter Password"
                      onChange={this.passwordType}
                      value={passwordInput}
                    />
                  </div>
                </div>
                <div className="button-container">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
        </div>

        <div className="passwords-bg-container">
          <div className="search-input-container">
            <div className="passwords-len-container">
              <h1 className="your-passwords-head">Your Passwords</h1>
              <p className="passwords-count">{passwordsCount}</p>
            </div>
            <div className="password-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <div>
                <input
                  type="search"
                  className="search-input-ele"
                  placeholder="Search"
                  onChange={this.onSearchWebsite}
                />
              </div>
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-passwords-container">
            <input
              id="checkbox"
              type="checkbox"
              onChange={this.onShowPasswordView}
            />
            <label htmlFor="checkbox" className="show-passwords-head">
              Show Passwords
            </label>
          </div>
          {filteredUserList.length === 0 ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p className="no-passwords">No Passwords</p>
            </div>
          ) : (
            <ul className="u-list-container">
              {filteredUserList.map(eachUser => (
                <Passwords
                  users={eachUser}
                  key={eachUser.id}
                  showStatus={showPasswords}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default AddNewPasswords
