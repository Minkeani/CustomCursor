import React from 'react'
import { useRef } from 'react'

export default function Cursor() {
    const dot = useRef(null)

  return (
    <>
        <div className="cursor-dot-outline">
        </div>
        <div className="cursor-dot"></div>
    </>
  )
}
