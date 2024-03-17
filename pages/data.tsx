import Image from 'next/image'
import { useEffect, useState } from 'react'
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
  console.log('重构')

  const res = await fetch('http://localhost:3000/products', {
    method: 'get',
  })
  const data = await res.json()
  console.log(data)

  // let auth = 0
  // if (auth == 0) {
  //   return {
  //     // 路由守卫，设置没有权限时重定向
  //     redirect: {
  //       destination: '/',
  //     },
  //     props: {},
  //   }
  // } else if (auth == 1) {
  //   return {
  //     // 设置没有数据时才返回404
  //     notFound: true,
  //     props: {},
  //   }
  // }

  return {
    props: {
      data,
    },
    revalidate: 15,
  }
}
