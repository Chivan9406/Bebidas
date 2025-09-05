import { useMemo } from 'react'

import { useAppStore } from '../stores/useAppStore.ts'
import DrinkCard from '../components/DrinkCard.tsx'

function IndexPage() {
  const drinks = useAppStore(state => state.drinks)
  const hasDrinks = useMemo(() => drinks.drinks.length, [ drinks ])

  return (
    <>
      <h1 className='text-6xl font-extrabold'>Recetas</h1>

      { hasDrinks ? (
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 my-10'>
          { drinks.drinks.map(drink => (
            <DrinkCard
              key={ drink.idDrink }
              drink={ drink }
            />
          )) }
        </div>
      ) : (
        <p className='my-10 text-center text-2xl'>Aún no hay resultados, usa el formulario para buscar recetas</p>
      ) }
    </>
  )
}

export default IndexPage