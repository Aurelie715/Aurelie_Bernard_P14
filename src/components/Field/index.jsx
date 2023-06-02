import React from 'react'
import FieldName from '../common/Field-name'
import InputText from '../common/Input-text'


export default function Field({id, name, value, type}) {
  return (
    <div>
        <FieldName name={name} inputId={id}/>
        <InputText type={type} id={id} value={value ?? ""}/>
    </div>
  )
}
