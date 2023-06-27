import React from 'react'
import Label from '../common/Label'
import { SelectMenu } from 'select-menu-hrnet-oc'

export default function Select({list=[], value, onChange, classNameSelect, classNameValue, classNameIcon, classNameListContainer, classNameList, classNameElement, name}) {
  return (
    <div>
        <Label name={name}/>
        <SelectMenu list={list} value={value} onChange={onChange} classNameSelect={classNameSelect} classNameValue={classNameValue} classNameIcon={classNameIcon} classNameListContainer={classNameListContainer} classNameList={classNameList} classNameElement={classNameElement}/>
    </div>
  )
}

