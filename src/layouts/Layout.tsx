import { Outlet } from 'react-router'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import Header from '../components/Header.tsx'
import Modal from '../components/Modal.tsx'
import { useAppStore } from '../stores/useAppStore.ts'

function Layout() {
  const loadFromStorage = useAppStore(state => state.loadFromStorage)
  useEffect(() => loadFromStorage, [])

  return (
    <>
      <Header />
      <main className='container mx-auto py-16'>
        <Outlet />
      </main>
      <Modal />
      <ToastContainer />
    </>
  )
}

export default Layout