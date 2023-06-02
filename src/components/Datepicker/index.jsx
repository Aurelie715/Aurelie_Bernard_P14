import React from 'react'
import FieldName from '../common/Field-name'
import InputDate from '../common/Input-date'

export default function Datepicker({name, id}) {
  return (
    <div>
      <FieldName name={name} inputId={id}/>
      <InputDate id={id}/>
    </div>
  )
}
