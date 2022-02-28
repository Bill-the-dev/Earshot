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

  //process form update?

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
      <div className="signup-container">
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
        <form onSubmit={this.handleSubmit} className="signup-form">
          <label><b>What's your email?</b>
            <input type="text"
              placeholder="Enter your email."
              onChange={this.update('email')}
              className="form-input"
            />
          </label>
          {/* <label><b>Confirm your email</b>
            <input type="text"
              value="Enter your email again."
              onChange={this.update('email')}
              className="form-input"
            />
          </label> */}
          <label><b>Create a password</b>
            <input type="text"
              placeholder="Create a password."
              onChange={this.update('password')}
              className="form-input"
            />
          </label>
          <label><b>What should we call you?</b>
            <input type="text"
              placeholder="Enter a profile name."
              onChange={this.update('password')}
              className="form-input"
            />
          </label>
          <br/>
          <div className='submit-center'>
            <input className="session-submit" type="submit" value="Sign up" />
            <br />
            <span> Have an account? {this.props.navLink}.</span>
          </div>
          {this.renderErrors()}
          </form>
      </div>
    )
  }
}

export default LoginForm;