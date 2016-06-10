
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
// import todos from './todos'
import navbar from './navbar'
import layout from './layout'
import playlists from './playlists'

export default combineReducers({
  routing,
  // todos,
  navbar,
  layout,
  playlists
})
