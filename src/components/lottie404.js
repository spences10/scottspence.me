import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animationData.json'

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isStopped: false, isPaused: false }
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        Lottie 404 animation by{' '}
        <a href="https://lottiefiles.com/jony">Changhyun Lee</a>
      </div>
    )
  }
}
