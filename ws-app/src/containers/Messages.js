import React from 'react'
import { connect } from 'react-redux'
import MessageForm from './MessageForm'
import { initWebsocket, closeWebsocket } from '../actions/messages'


const Message = ({ text }) => (
  <li>
    { text }
  </li>
)


class Messages extends React.Component {
  componentDidMount() {
    document.title = 'Chat Room'

    const { initWebsocket } = this.props
    initWebsocket()
  }

  componentWillUnmount() {
    const { closeWebsocket } = this.props
    closeWebsocket()
  }

  render() {
    const messages = (this.props.message.list.slice().reverse().map((message, i) => <Message key={ i } { ...message }/>))

    return (
      <div>
        <MessageForm/>
        <ul>
          { messages }
        </ul>
      </div>
    )
  }
}


export default connect(
  state => state,
  dispatch => ({
    initWebsocket: () => dispatch(initWebsocket()),
    closeWebsocket: () => dispatch(closeWebsocket()),
  }),
)(Messages)
