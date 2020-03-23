import React from 'react'
import {connect} from 'react-redux'
import {createMessage} from '../actions/messages'

let MessageForm = ({ dispatch }) => {
  let input
  const sendMessage = (input) => {
    const message = input.value.trim()

    if (!message) return
    dispatch(createMessage(message))
    input.value = ''
  }
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        sendMessage(input)
    }}>
      <input ref={node => {input = node}}/> {/* assign the node reference to the input variable */}
    </form>
  )
}

export default connect()(MessageForm)
