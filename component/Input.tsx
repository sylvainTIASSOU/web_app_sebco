import { InputProps } from '@/types'
import React from 'react'

const Input = ({hint, name, type, style}: InputProps) => {
  return (
    <input type={type as string} 
    placeholder={hint as string} 
    name={name as string} 
    className={style as string}
    />
  )
}

export default Input