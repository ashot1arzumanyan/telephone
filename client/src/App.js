import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store'

import Game from './components/Game'

import './styles/App.scss'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Game />
        </div>
      </Provider>
    );
  }
}

export default App;
