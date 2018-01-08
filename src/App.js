import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import MainContainer from './MainContainer'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )
  }
}
