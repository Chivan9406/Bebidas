import { useMemo } from 'react'

import DrinkCard from '../components/DrinkCard.tsx'
import { useAppStore } from '../stores/useAppStore.ts'

function FavoritesPage() {
  const favorites = useAppStore(state => state.favorites)
  const hasFavorites = useMemo(() => favorites.length, [ favorites ])

  return (
    <>
      <h1 className='text-6xl font-extrabold'>Favoritos</h1>

      { hasFavorites ? (
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 my-10'>
          { favorites.map(drink => (
            <DrinkCard
              key={ drink.idDrink }
              drink={ drink }
            />
          )) }
        </div>
      ) : (
        <p className='my-10 text-2xl text-center'>Aún no tienes bebidas favoritas</p>
      ) }
    </>
  )
}

export default FavoritesPage