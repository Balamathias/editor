'use client'


import { useStore } from '@/store/useStore'
import React from 'react'

const Page = () => {
    const items = useStore(state => state.items)
    const addItem = useStore(state => state.addItem)
    const clearItems = useStore(state => state.clearItems)

    console.log(items)

  return (
    <div>
        <button onClick={() => addItem(Math.random().toString())}>Add</button>
        <button onClick={clearItems}>Clear</button>
        {items.map(item => (<p key={item}>{item}</p>))}
    </div>
  )
}

export default Page