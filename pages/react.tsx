import { useEffect, useState } from 'react'
import useSWR from 'swr'

const url = 'http://localhost:3000/products'

export default function Index(props: IProps) {
  const [sales, setSales] = useState(props.sales)
  const { data, error } = useSWR(url, fetcher)

  async function fetcher() {
    const res = await fetch(url)
    return await res.json()
  }

  useEffect(() => {
    setSales(data)
    console.log('data', data)
  }, [data])

  if (error) {
    return <div>没有数据</div>
  }

  if (!data || !sales) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1 className="text-lg font-bold">{sales.id}</h1>
      <h1>{sales.age}</h1>
      <h1>{sales.username}</h1>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
      sales: data,
    },
    revalidate: 15,
  }
}

interface IProps {
  sales: RootObject
}

interface RootObject {
  id: number
  username: string
  age: number
}
