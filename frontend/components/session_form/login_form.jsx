import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.processForm(user);
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
    return (
      <div className="login-container">
        <div className="logo-inline">
          <span >
            <i class="fa-solid fa-ear-listen fa-xl fa-logo"></i>
            <h2>Earshot</h2>
          </span>
          <br />
        </div>
        <br/>
        <h2> Sign up for free to start listening.</h2>
        <br/>
        <hr/>
        <h3>Sign up with your email address</h3>
        <br />
        <form onSubmit={this.handleSubmit} className="login-form">
          <label><b>Email address or username</b>
            <input type="text"
              placeholder="Email address or username"
              onChange={this.update('email')}
              className="form-input"
            />
          </label>
          <label><b>Password</b>
            <input type="text"
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
            <div className='link-signup'>{this.props.navLink}</div>
          </div>
          {this.renderErrors()}
          </form>
      </div>
    )
  }
}

export default LoginForm;