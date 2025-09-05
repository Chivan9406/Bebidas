import { BrowserRouter, Route, Routes } from 'react-router'

import Layout from './layouts/Layout.tsx'
import { lazy, Suspense } from 'react'

const IndexPage = lazy(() => import('./views/IndexPage.tsx'))
const FavoritesPage = lazy(() => import('./views/FavoritesPage.tsx'))

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout /> }>
          <Route index
                 element={
                   <Suspense fallback='Cargando...'>
                     <IndexPage />
                   </Suspense>
                 }
          />
          <Route path='/favoritos'
                 element={
                   <Suspense fallback='Cargando...'>
                     <FavoritesPage />
                   </Suspense>
                 }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter