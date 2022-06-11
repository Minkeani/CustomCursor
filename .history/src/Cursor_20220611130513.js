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

  const toggleCursorVisibility  = () => {
    if(cursorVisible.current) {
        dot.current.style.opacity = 1;
        dotOutLine.current.style.opacity = 1;
    } else {
        dot.current.style.opacity = 0;
        dotOutLine.current.style.opacity = 0;
    }
  }
  const toggleCursorSize = () => { 
    if(cursorEnlarged.current) {
        dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
        dotOutLine.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
        dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
        dotOutLine.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize()
    }

    const mouseOutEvent = () => { 
        cursorEnlarged.current = false;
        toggleCursorSize()
    }

    const mouseEnterEvent = () => { 
        cursorVisible.current = true;
        toggleCursorVisibility()
    }

    const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
      };

    
  return (
    <>
        <div ref={dotOutLine} className="cursor-dot-outline"></div>
        <div ref={dot} className="cursor-dot"></div>
    </>
  )
}
