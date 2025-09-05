import { create } from 'zustand/react'
import { devtools } from 'zustand/middleware'

import { createRecipesSlice, type RecipesSliceType } from './recipeSlice.ts'
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice.ts'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice.ts'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice()
})))