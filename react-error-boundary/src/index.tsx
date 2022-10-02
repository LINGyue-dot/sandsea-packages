import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from './ErrorBoundary'
import ErrorComponent from './ErrorComponent'

const App = () => (
  <ErrorBoundary>
    <ErrorComponent />
  </ErrorBoundary>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
