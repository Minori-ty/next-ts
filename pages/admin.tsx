import React from 'react'

export default function Auth(props: IProps) {
  return <div>{props.username}</div>
}

// 只在用户访问时运行，比如实时变化的股票数据
export async function getServerSideProps(context: IContext) {
  const { req, res } = context
  return {
    props: {
      username: 'Max',
    },
  }
}

interface IContext {
  [key: string]: any
}

interface IProps {
  username: string
}
