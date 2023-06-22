import React from 'react'
import Label from '../common/Label'
import Datepicker from '../common/Datepicker'

export default function FieldDate({name, id, onChange, selected}) {
  return (
    <div>
      <Label name={name} inputId={id}/>
      <Datepicker onChange={onChange} selected={selected}/>
    </div>
  )
}
