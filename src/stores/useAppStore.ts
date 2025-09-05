import { create } from 'zustand/react'
import { devtools } from 'zustand/middleware'

import { type AISliceType, createAISlice } from '../layouts/aiSlice.ts'
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice.ts'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice.ts'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice.ts'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
  ...createAISlice(...a)
})))