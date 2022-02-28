import React from 'react';

class SessionForm extends React.Component {
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <span className="session-logo">
          <i className="fa-solid fa-ear-listen fa-xl"></i>
          </span>
          <p>Earshot</p>
          <br/>
          <h2> Sign up for free to start listening.</h2>
          <p>{this.props.formType} with your email address</p>
          
          <div className="login-form">
            <br/>
            <label>What should we call you?
              <br />
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="form-input"
              />
            </label>
            <br/>
            <label>Create a password
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="form-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br />
            Have an account? {this.props.navLink}
          {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
