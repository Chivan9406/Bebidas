import { NavLink, useLocation } from 'react-router'
import { type ChangeEvent, type FormEvent, useEffect, useMemo, useState } from 'react'

import { useAppStore } from '../stores/useAppStore.ts'

function Header() {
  const [ searchFilters, setSearchFilters ] = useState({
    ingredient: '',
    category: ''
  })
  const { pathname } = useLocation()
  const isHome = useMemo(() => pathname === '/', [ pathname ])
  const fetchCategories = useAppStore(state => state.fetchCategories)
  const categories = useAppStore(state => state.categories)
  const searchRecipes = useAppStore(state => state.searchRecipes)
  const showNotification = useAppStore(state => state.showNotification)

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // ToDo
    if (Object.values(searchFilters).includes('')) {
      showNotification({
        text: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    searchRecipes(searchFilters)
  }

  return (
    <header className={ isHome ? 'bg-[url(/bg.jpg)] bg-center bg-cover' : 'bg-slate-800' }>
      <div className="mx-auto container px-5 py-16">
        <div className='flex justify-between items-center'>
          <div>
            <img src="/logo.svg" alt="Logotipo bebidas" className='w-32' />
          </div>
          <nav className='flex gap-4'>
            <NavLink
              to='/'
              className={ ({ isActive }) => isActive
                ? 'text-orange-500 uppercase font-bold'
                : 'text-white uppercase font-bold' }
            >
              Inicio
            </NavLink>
            <NavLink
              to='/favoritos'
              className={ ({ isActive }) => isActive
                ? 'text-orange-500 uppercase font-bold'
                : 'text-white uppercase font-bold' }
            >
              Favoritos
            </NavLink>
            <NavLink
              to='/generate'
              className={ ({ isActive }) => isActive
                ? 'text-orange-500 uppercase font-bold'
                : 'text-white uppercase font-bold' }
            >
              Generar con IA
            </NavLink>
          </nav>
        </div>

        { isHome && (
          <form
            className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-10'
            onSubmit={ handleSubmit }
          >
            <div className='space-y-4'>
              <label
                htmlFor="ingredient"
                className='block text-white uppercase font-extrabold text-lg'
              >
                Nombre o ingredientes
              </label>
              <input
                type="text"
                id='ingredient'
                name='ingredient'
                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                placeholder='Nombre o ingrediente. Ej: Tequila, Vodka, etc'
                onChange={ handleChange }
                value={ searchFilters.ingredient }
              />
            </div>
            <div className='space-y-4'>
              <label
                htmlFor="category"
                className='block text-white uppercase font-extrabold text-lg'
              >
                Categoría
              </label>
              <select
                id='category'
                name='category'
                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                onChange={ handleChange }
                value={ searchFilters.category }
              >
                <option value="">-- Seleccione --</option>
                { categories.drinks.map(drink => (
                  <option
                    key={ drink.strCategory }
                    value={ drink.strCategory }
                  >
                    { drink.strCategory }
                  </option>
                )) }
              </select>
            </div>
            <input
              type="submit"
              value="Buscar recetas"
              className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
            />
          </form>
        ) }
      </div>
    </header>
  )
}

export default Header