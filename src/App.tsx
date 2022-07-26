import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import client from 'services/api'
import { store } from 'store'
import React from 'react'

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <p>Test</p>
      </ApolloProvider>
    </Provider>
  )
}

export default App
