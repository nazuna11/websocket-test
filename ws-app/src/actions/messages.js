const WS_URL = 'ws://localhost:8080'
let ws


export const initWebsocket = () => {
  return (dispatch) => {
    dispatch(connectToWebsocket())
  }
}

export const closeWebsocket = () => {
  return () => ws.close()
}

export const createMessage = (text) => {
  return () => {
    const message = {
      text: text,
    }

    ws.send(JSON.stringify(message))
  }
}

export const connectToWebsocket = () => {
  ws = new WebSocket(WS_URL)

  return dispatch => {
    ws.onmessage = (message) => {
      dispatch({
        type: 'CREATE_MESSAGE',
        payload: JSON.parse(message.data)
      })
    }
  }
}
