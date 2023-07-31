import { ButtonProps } from '@/types'
import React from 'react'

const Button = ({typeBtn, containerStyle, handleClick, title}: ButtonProps) => {
  return (
    <button
    disabled={false}
    type={ typeBtn ||'button'}
    className={`custom-btn ${containerStyle}`}
    onClick={handleClick}
    >
      <span className={'flex-1'}>
        {title}
      </span>

    </button>
  )
}

export default Button