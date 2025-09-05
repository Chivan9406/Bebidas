import type { StateCreator } from 'zustand'

import type { FavoritesSliceType } from './favoritesSlice.ts'
import { toast } from 'react-toastify'

type Notification = {
  text: string
  error: boolean
}

export type NotificationSliceType = {
  showNotification: (payload: Notification) => void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = () => ({
  showNotification: (payload) => {
    if (payload.error) {
      toast.error(payload.text)
    } else {
      toast.success(payload.text)
    }
  }
})