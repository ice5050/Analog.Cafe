import React from 'react'

class TouchEnabled extends React.Component {
  render () {
    console.log('TouchEnabled')

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default TouchEnabled
