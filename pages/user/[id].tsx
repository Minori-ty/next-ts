import path from 'path'
import React from 'react'
import fs from 'fs/promises'

export default function Index(props: { data: Product }) {
  const { data } = props
  // if (!id) {
  //   return <h1>Loading...</h1>
  // }
  console.log(data)

  return (
    <>
      <h1>{data.id}</h1>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </>
  )
}

export async function getStaticProps(context: IContext) {
  const { params } = context
  const id = params.id
  const data = await getData()
  const product = data.products.find((p: any) => p.id == id)
  if (!product) {
    // 没有这个产品时，要么返回提示符，要么返回not-found
    return {
      props: {
        data: {
          id: id,
          title: '没有这个id',
          description: '没有这个id',
        },
      },
    }
  }
  return {
    props: {
      data: product,
    },
  }
}

// 在动态路由中要和getStaticProps配合使用
// 在很多页的时候，提前预构建前10页，减少node渲染压力
export async function getStaticPaths() {
  const data = await getData()
  const ids = data.products.map((p) => p.id)
  const paramPaths = ids.map((id) => ({ params: { id } }))

  return {
    paths: paramPaths,
    // 如果没有这个user的静态页面时，允许服务端渲染出来 `true`则是先返回html，加载loading，然后再加载内容，会闪一下。`blocking`则是先服务端渲染，再返回。
    fallback: 'blocking',
  }
}

async function getData(): Promise<RootObject> {
  const filePath = path.join(process.cwd(), 'data', 'data.json')

  const jsonData = await fs.readFile(filePath)
  const data: RootObject = JSON.parse(jsonData.toString())

  return data
}

interface IContext {
  params: {
    [key: string]: string
  }
}

interface RootObject {
  products: Product[]
}

interface Product {
  id: string
  title: string
  description: string
}
