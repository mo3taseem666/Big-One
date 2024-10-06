import React from 'react'
import DivHeader from '../../../Golbal Components/DivHeader'
import InputLabel from '../Mini Components/General Info/InputLabel'
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses'
import Email from '../Mini Components/General Info/Email'

export default function GeneralInfo() {
    const {mainDiv} = GlobalClasses()
  return (
    <div className={mainDiv}>
        <DivHeader title='General Info' details='General Information About Your Account' />
        <InputLabel label='First Name' />
        <InputLabel label='Last Name' />
        <Email />
    </div>
  )
}
