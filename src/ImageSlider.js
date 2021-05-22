// your ImageSlider code here!
import React from "react"

class ImageSlider extends React.Component {
  render() {
    
    constructor() {
      super()
      this.state = {
        currentSlideIndex: 0
      }
    }

    return (
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )

  }
}

export default ImageSlider;
