import React, { useState } from "react";

export default function InputText({id, value, type, onChange}) {
  return (
    <>
      <input type={type} id={id} value={value} onChange={onChange}/>
    </>
  );
}
