import React, { Component } from "react";
import { User } from './model/Model';
import { AuthService } from './services/AuthService';
interface AppState {
  user: User | undefined
}
class App extends Component<{}, AppState> {
  private AuthService: AuthService = new AuthService();
  render() {
    return <div className="App">
      React Application
    </div>
  }
}

export default App;
