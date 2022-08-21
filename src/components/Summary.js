import React from 'react';
import { SimpleButton } from './SimpleButton';
import { HooksButton } from './HooksButton';

export const Summary = (props) => {
  return (
    <>
      <td>{ props.index + 1 }</td>
      <td>{ props.name }</td>
      <td>{ props.name.length }</td>
      <td>
        <SimpleButton className="btn btn-warning btn-sm m-1" callback={ props.reverseCallback } text={ `Reverse (${ props.name })` } />
        <HooksButton className="btn btn-info btn-sm m-1" text={ `Promote (${ props.name })` } callback={ () => props.promoteCallback(props.name) } />
      </td>
    </>
  )
}
