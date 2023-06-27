"use client"
import Image from 'next/image'
import { Button } from 'antd'

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <h1 >Hello World</h1>
      <Button type='primary' />
    </div>
  )
}
