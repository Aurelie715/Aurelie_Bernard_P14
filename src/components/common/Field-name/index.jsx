import React from 'react'

export default function FieldName({name, inputId}) {
  return (
    <>
        <label htmlFor={inputId}>{name}</label>
    </>
  )
}
