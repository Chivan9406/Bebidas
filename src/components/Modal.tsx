import type { JSX } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

import { useAppStore } from '../stores/useAppStore.ts'
import type { Recipe } from '../types'

export default function Modal() {
  const modal = useAppStore(state => state.modal)
  const closeModal = useAppStore(state => state.closeModal)
  const selectedRecipe = useAppStore(state => state.selectedRecipe)
  const handleClickFavorite = useAppStore(state => state.handleClickFavorite)
  const favoriteExists = useAppStore(state => state.favoriteExists)

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = []

    for (let i = 1; i <= 6; i++) {
      const ingredient = selectedRecipe[`strIngredient${ i }` as keyof Recipe]
      const measure = selectedRecipe[`strMeasure${ i }` as keyof Recipe]

      if (ingredient && measure) {
        ingredients.push(
          <li key={ i } className='text-lg font-normal mb-0'>
            { ingredient } - { measure }
          </li>
        )
      }
    }

    return ingredients
  }

  return (
    <Dialog
      className='relative z-50'
      open={ modal }
      onClose={ closeModal }
    >
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-black/75 duration-300 ease-out data-closed:opacity-0'
      />

      <div className='fixed inset-0 flex w-screen items-center justify-center'>
        <DialogPanel
          className='w-full max-w-3xl space-y-4 bg-white p-4 rounded-lg duration-300 ease-out data-closed:scale-95 data-closed:opacity-0'
          transition
        >
          <DialogTitle as='h3' className='text-gray-900 text-4xl font-extrabold my-5 text-center'>
            { selectedRecipe.strDrink }
          </DialogTitle>
          <img
            src={ selectedRecipe.strDrinkThumb }
            alt={ `Imagen ${ selectedRecipe.strDrink }` }
            className='mx-auto w-96'
          />
          <DialogTitle as='h3' className='text-gray-900 text-2xl font-extrabold my-5'>
            Ingredientes y Cantidades
          </DialogTitle>
          { renderIngredients() }
          <DialogTitle as='h3' className='text-gray-900 text-2xl font-extrabold my-5'>
            Instrucciones
          </DialogTitle>
          <p className='text-lg'>{ selectedRecipe.strInstructions }</p>

          <div className='mt-5 flex justify-between gap-4'>
            <button
              type='button'
              className='w-full cursor-pointer rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500'
              onClick={ closeModal }
            >
              Cerrar
            </button>

            <button
              type='button'
              className='w-full cursor-pointer rounded bg-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500'
              onClick={ () => handleClickFavorite(selectedRecipe) }
            >
              { favoriteExists(selectedRecipe.idDrink) ? 'Eliminar Favorito' : 'Agregar a Favoritos' }
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}