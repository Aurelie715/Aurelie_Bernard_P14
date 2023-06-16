import React, {useId} from 'react'
import FieldName from '../common/Field-name'
import InputText from '../common/Input-text'



export default function Field({name, value, type, onChange}) {
  //à voir si je garde ça : useId
  const fieldInputId = useId()
  return (
    <div>
        <FieldName name={name} inputId={fieldInputId}/>
        <InputText type={type} id={fieldInputId} value={value} onChange={onChange}/>
    </div>
  )
}
