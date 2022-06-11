import React from 'react'
import { useRef } from 'react'

export default function Cursor() {
    const dot = useRef(null)
    const dotOutLine = useRef(null)

  return (
    <>
        <div ref={dotOutLine} className="cursor-dot-outline"></div>
        <div ref={dot} className="cursor-dot"></div>
    </>
  )
}
