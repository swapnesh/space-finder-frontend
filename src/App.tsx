import React, { Component } from "react";
import { User } from './model/Model';
import { AuthService } from './services/AuthService';

import Login from "./components/Login";
interface AppState {
  user: User | undefined
}
class App extends Component<{}, AppState> {
  private authService: AuthService = new AuthService();
  render() {
    return <div className="App">
      React Application works !!!
      <Login authService={this.authService} />
    </div>
  }
}

export default App;
