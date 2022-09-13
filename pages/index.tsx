import React from 'react'
import styleSheet from '../styles/index.module.scss'
import { DatePicker } from '@douyinfe/semi-ui'

export default function index() {
  return (
    <>
      <div className="text-lg text-red-500">
        <div>你好 next</div>
      </div>
      <DatePicker onChange={(date, dateString) => console.log(dateString)} />
    </>
  )
}
