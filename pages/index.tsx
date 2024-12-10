import React from 'react'
import styleSheet from '../styles/index.module.scss'
import Link from 'next/link'

export default function index() {
  return (
    <>
      <Link href={{ pathname: '/admin' }}>admin</Link>
      <br />
      <Link href={{ pathname: '/home' }}>home</Link>
      <br />
      <Link href={{ pathname: '/data' }}>data</Link>
      <br />
      <Link href={{ pathname: '/user/1' }}>user/1</Link>
      <br />
      <div className="text-lg text-red-500">
        <div>你好 next</div>
      </div>
      {/* <DatePicker onChange={(date, dateString) => console.log(dateString)} /> */}
    </>
  )
}
