'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { store } from '.'


interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
