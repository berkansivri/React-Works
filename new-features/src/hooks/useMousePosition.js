import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x:0, y:0 })
  
  useEffect(() => {
    console.log("setting up event");
    const onMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }
    document.addEventListener('mousemove', onMouseMove)

    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  return position
}

export { useMousePosition as default }