import { Component, SyntheticEvent } from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps {
  authService: AuthService
}

interface LoginState {
  userName: string,
  password: string,
  loginAttempted: boolean,
  loginSuccessful: boolean
}

interface CustomEvent {
  target: HTMLInputElement
}

class Login extends Component<LoginProps, LoginState> {

  state: LoginState = {
    userName: '',
    password: '',
    loginAttempted: false,
    loginSuccessful: false
  }

  private setUserName(event: CustomEvent) {
    this.setState({
      userName: event.target.value
    })
  }

  private setPassword(event: CustomEvent) {
    this.setState({
      password: event.target.value
    })
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        ...prevState,
        loginAttempted: true
      }
    })
    const result = await this.props.authService.login(this.state.userName, this.state.password);
    if(result) {
      this.setState(prevState => {
        return {
          ...prevState,
          loginAttempted: true,
          loginSuccessful: true,
        }
      })
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          loginAttempted: true,
          loginSuccessful: false,
        }
      })
    }
  }

  render() {

    const { loginAttempted, loginSuccessful } = this.state;
    let loginMessage: string = '';

    if(loginSuccessful) {
      loginMessage = 'Login Successful';
    } else {
      loginMessage = 'Login failed';
    }

    return <div className="login">
      <h3 className="title">Please Login</h3>
      <form onSubmit={e => this.handleSubmit(e)} autoComplete="off">
        <div className="field input">
          <label htmlFor="userName">User Name:</label>
          <input type="text" name="userName" id="userName" autoComplete="off" value={this.state.userName} onChange={e => this.setUserName(e)} />
        </div>
        <div className="field input">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" autoComplete="off" value={this.state.password} onChange={e => this.setPassword(e)} />
        </div>
        <div className="field action">
          <button type="submit" onClick={e => this.handleSubmit(e)}>Login</button>
        </div>
      </form>
      {loginAttempted ? <div className="login-message">
        {loginMessage}
      </div> : null}
    </div>
  }
}

export default Login;
