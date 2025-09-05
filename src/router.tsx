import { BrowserRouter, Route, Routes } from 'react-router'

import IndexPage from './views/IndexPage.tsx'
import FavoritesPage from './views/FavoritesPage.tsx'
import Layout from './layouts/Layout.tsx'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout /> }>
          <Route element={ <IndexPage /> } index />
          <Route path='/favoritos' element={ <FavoritesPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter