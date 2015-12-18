import { createStore, compose } from 'redux'
import rootReducer from '../reducers'
import { stateHistoryTracker as trackHistory } from 'redux-state-history';
import { Devtool as debugStateHistory } from 'redux-state-history';

const finalCreateStore = compose(
  debugStateHistory,
  trackHistory()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
