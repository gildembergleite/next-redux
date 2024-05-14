'use client'
import { store } from '@/store'
import { ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'

export function RootProvider({ children }: Readonly<{ children: ReactNode }>) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}
