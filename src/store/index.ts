import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export type { AppDispatch, RootState, AppThunk }
