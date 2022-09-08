import React from 'react'

export default function Index(props: any) {
  return (
    <>
      <div>{props.id}</div>
    </>
  )
}

export async function getStaticProps(p: any) {
  return {
    props: {
      id: p.params.id,
    },
  }
}

// 要和getStaticProps配合使用
// 在很多页的时候，提前预构建10页，减少node渲染压力
export async function getStaticPaths() {
  const paths = [1, 2, 3].map((id) => {
    return {
      params: { id: id + '' },
    }
  })
  console.log(paths)

  return {
    paths,
    fallback: 'blocking', // See the "fallback" section below
  }
}
