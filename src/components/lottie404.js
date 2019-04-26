import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../animationData.json'

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return width
}

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isStopped: false, isPaused: false }
  }

  render() {
    const windowWidth = useWindowWidth() // Our custom Hook
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
          width={windowWidth}
          height={windowWidth}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        Lottie 404 animation by{' '}
        <a href="https://lottiefiles.com/jony">Changhyun Lee</a>
      </div>
    )
  }
}
