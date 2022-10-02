import React from 'react'

export default class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode
  },
  {
    hasError: boolean
  }
> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    // 更新 state
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>something went wrong</h1>
    }
    return this.props.children
  }
}
