import React, { Component } from 'react'

export class Spinner extends Component {
  imageUrl = "https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
  render() {
    return (
      <div className='text-center'>
        <img src={this.imageUrl} alt="loading" />
      </div>
    )
  }
}

export default Spinner
