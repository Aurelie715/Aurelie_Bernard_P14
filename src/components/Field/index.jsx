import React, {useId} from 'react'
import Label from '../common/Label'



export default function Field({name, value, type, onChange}) {
  //à voir si je garde ça : useId
  const fieldInputId = useId()
  return (
    <div>
        <Label name={name} inputId={fieldInputId}/>
        <input type={type} id={fieldInputId} value={value} onChange={onChange}/>
    </div>
  )
}
