import React, { useState } from "react";

export default function InputText({id, value, type, onChange}) {
  const [valueInput, setValue] = useState(value ?? "");

  const onValueChange = (event) => {
    setValue(event.currentTarget.value);
    onChange && onChange(event);
  };

  return (
    <>
      <input type={type} id={id} value={valueInput} onChange={onValueChange}/>
    </>
  );
}
