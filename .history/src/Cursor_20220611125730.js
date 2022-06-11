import React from 'react'
import { useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
    const dot = useRef(null)
    const dotOutLine = useRef(null)

    const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const toggleCursorSize = () => {
    if(cursorVisible.current) {
        dot.current.style.opacity = 1;
        dotOutLine.current.style.opacity = 1;
    }
  }

  return (
    <>
        <div ref={dotOutLine} className="cursor-dot-outline"></div>
        <div ref={dot} className="cursor-dot"></div>
    </>
  )
}
