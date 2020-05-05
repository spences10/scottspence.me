// Thanks Wes!
// https://github.com/wesbos/awesome-uses/blob/9dab2205f1/src/components/FavIcon.js

import React, { useEffect, useRef, useState } from 'react'
import { theme } from '../theme/global-style'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

function useWickedFavIcon() {
  const letters = [...'Scott Spence 🙃']
  const [index, setIndex] = useState(0)
  const canvasRef = useRef(0)
  useInterval(() => {
    setIndex(index >= letters.length - 1 ? 0 : index + 1)
    const letter = letters[index]
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = theme.colours.primary[500]
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = theme.colours.grey[200]
    ctx.font = `250px monospace`
    ctx.fillText(letter, 10, canvas.height - 10)
    const data = canvas.toDataURL('image/png')

    const link = document.querySelector("link[rel*='icon']")
    link.type = 'image/x-icon'
    link.href = data
  }, 450)
  return { letter: letters[index], index, canvasRef }
}

export default function FavIcon() {
  const { canvasRef } = useWickedFavIcon()
  return (
    <div>
      <canvas
        style={{ border: '1px solid red' }}
        ref={canvasRef}
        width='200'
        height='200'
        hidden
      ></canvas>
    </div>
  )
}
