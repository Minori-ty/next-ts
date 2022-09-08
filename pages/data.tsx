import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import go from '../assets/images/go.jpg'

export default function Data(props: any) {
  const [num, setNum] = useState(0)

  useEffect(() => {}, [])
  console.log(props)

  return (
    <>
      <Image src={go} alt="失败" width={200} height={100} />
      <div>{num}</div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8080/v1/login', { method: 'post' })
  const data = await res.json()
  console.log(data)
  return {
    props: {
      data,
    },
  }
}
