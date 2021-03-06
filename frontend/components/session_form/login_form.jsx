import React from 'react'
import LogoBlack from '../../../app/assets/images/ear-listen-solid.svg'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  // state update to include more fields

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
      .then(() => this.props.history.push('/home'))
  }

  handleDemo(e) {
    e.preventDefault();
    // 
    this.props.login({username: 'KindGuest', password: 'password'})
    .then(() => this.props.history.push('/home'))
    
  }

  // ^ process form update needed 

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    let signUpLink = this.props.navLink

    return (
      <div className="login-container">
        <div >
          <span className="logo-inline">
            <img src={LogoBlack} alt="logo-black" className='logo-black'/>
            <h2 className='logo-title'>Earshot</h2>
          </span>
        </div> 
        <hr/>
        <div className='guest-submit' onClick={this.handleDemo}>Continue as Guest</div>   
        <h5 id="login-continue">To continue, log in to Earshot.</h5>
        <hr />
        <br />
        <form onSubmit={this.handleSubmit} className="login-form">
          <label className='input-label-txt'><b>Username</b>
            <input type="text"
              placeholder="Username"
              onChange={this.update('username')}
              className="form-input"
            />
          </label>
          <label className='input-label-txt'><b>Password</b>
            <input type="password"
              placeholder="Password"
              onChange={this.update('password')}
              className="form-input"
            />
          </label>
          <br/>
          <div className='submit-center'>
            <input className="session-submit" type="submit" value="Log In" />
            <br />
            <hr />
            <br />
            <span><b>Don't have an account?</b></span>
            <br />
            <div className='link-signup' value={this.props.navLink}>{signUpLink}</div>
          </div>
          {this.renderErrors()}
          </form>
      </div>
    )
  }
}

export default LoginForm;