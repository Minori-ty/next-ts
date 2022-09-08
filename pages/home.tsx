import Head from 'next/head'
import React from 'react'
import { Button, DatePicker } from '@douyinfe/semi-ui'

export default function home() {
  return (
    <>
      <Head>
        <title>首页</title>
        <meta content="动漫网站"></meta>
      </Head>
      <h1>首页</h1>
      <div>home</div>
      <Button>主要按钮</Button>
      <DatePicker onChange={(date, dateString) => console.log(dateString)} />
    </>
  )
}
