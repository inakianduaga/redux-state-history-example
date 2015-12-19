import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/todos'
import { Component as StateHistoryComponent } from 'redux-state-history';

class App extends Component {
  render() {
    const { todos, actions, state } = this.props
    return (
      <div>
        <div>
          <Header addTodo={actions.addTodo} />
          <MainSection todos={ todos } actions = { actions } />
        </div>
          <StateHistoryComponent {...state.stateHistory} />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
