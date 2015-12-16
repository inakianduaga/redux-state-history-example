import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/todos'
// import { Component as StateHistoryComponent } from 'redux-state-history';

class App extends Component {
  render() {
    const { todos, actions, state } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={ todos } actions = { actions } />
        {/* <StateHistoryComponent {...state.stateHistory} /> */}
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
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

function fullState(state) {
  return {
    state
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
