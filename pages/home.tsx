import Head from 'next/head'
import React from 'react'

export default function home() {
  return (
    <>
      <Head>
        <title>首页</title>
        <meta name="description" content="动漫网站" />
      </Head>
      <h1>首页</h1>
      <div>home</div>
      {/* <DatePicker onChange={(date, dateString) => console.log(dateString)} /> */}
    </>
  )
}
