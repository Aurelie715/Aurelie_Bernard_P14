import React from 'react'
import FieldName from '../common/Field-name'
import { SelectMenu } from 'select-menu-hrnet-oc'



export default function Select({list=[], value, classNameSelect, classNameValue, classNameIcon, classNameListContainer, classNameList, classNameElement, name}) {
  return (
    <div>
        <FieldName name={name}/>
        <SelectMenu list={list} value={value} classNameSelect={classNameSelect} classNameValue={classNameValue} classNameIcon={classNameIcon} classNameListContainer={classNameListContainer} classNameList={classNameList} classNameElement={classNameElement}/>
    </div>
  )
}
