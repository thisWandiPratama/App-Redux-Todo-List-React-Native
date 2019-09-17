import React from 'react'
import { View, YellowBox } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './src/Redux/todoListRedux'
import List from './src/Redux/List'
import Input from './src/Redux/Input'
import Title from './src/Redux/Title'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends React.Component {

  onAddTodo = (text) => {
    const {dispatch} = this.props

    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props
     YellowBox.ignoreWarnings(['key'])
    return (
      <View>
        <Title>
          Catatan Singkat
        </Title>
        <Input
          placeholder={'Apa Yang Antum Pikirkan?'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)

