import React from 'react'
import { redirect } from '../utils'

export default function Auth() {
  return (
    <>
      <h1>auth</h1>
    </>
  )
}

export async function getInitialProps({ ...ctx }) {
  const token = ''
  if (!token) {
    redirect(ctx, '/data')
    return {
      token: null,
    }
  }

  return {
    token,
  }
}
