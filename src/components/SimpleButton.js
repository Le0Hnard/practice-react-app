import React from 'react'

export const SimpleButton = (props) => {
  return (
    <button onClick={ props.callback } className={ props.className }>
      { props.text }
    </button>
  )
}
