import { combineReducers } from 'redux'

import * as types from '../actions/types'

function demoClick(state = '',action){
  switch (action.type) {
    case types.TEXT_COMP_DEMO:
      return 'hello world'
    default:
      return state
  }
}

function demoSend(state = '' , action){
  switch (action.type) {
    case types.SEND_MSG_TO_YOU:
      return action.text
    default:
      return state
  }
}

const todoApp = combineReducers({
  demoClick,
  demoSend
})

export default todoApp