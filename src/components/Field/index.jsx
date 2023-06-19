import React, {useId} from 'react'
import FieldName from '../common/Field-name'



export default function Field({name, value, type, onChange}) {
  //à voir si je garde ça : useId
  const fieldInputId = useId()
  return (
    <div>
        <FieldName name={name} inputId={fieldInputId}/>
        <input type={type} id={fieldInputId} value={value} onChange={onChange}/>
    </div>
  )
}
