/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'
class MainContainer extends Component {
  onFetch = () => {
    let { dispatch } = this.props
    dispatch(fetchData())
  }

  renderLoading = () => {
    if (this.props.movies.isFetching) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        <Text>{item.title}</Text>
      </View>
    )
  }

  renderData = () => {
    if (
      !this.props.movies.isFetching &&
      this.props.movies.isSuccess &&
      this.props.movies.data.length > 0
    ) {
      return (
        <View style={{ flex: 1, paddingVertical: 50 }}>
          <FlatList
            data={this.props.movies.data}
            keyExtractor={item => item.releaseYear}
            renderItem={this.renderItem}
          />
        </View>
      )
    } else if (!this.props.movies.isSuccess && !this.props.movies.isFetching) {
      return (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.onFetch()}>
          <Text>Error</Text>
        </TouchableOpacity>
      )
    } else if (!this.props.movies.isFetching) {
      return <View style={{ flex: 1 }} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLoading()}
        {this.renderData()}
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => this.onFetch()}
        >
          <Text>Fetch</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const mapStateToProps = state => ({
  movies: state.movies
})
export default connect(mapStateToProps)(MainContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
