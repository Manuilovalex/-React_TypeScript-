import { Action, configureStore, Dispatch, Middleware, MiddlewareAPI, ThunkAction } from '@reduxjs/toolkit'
import counterReductor from './counterSlice'
import { useDispatch } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
export type AppDispatch = typeof store.dispatch

const logger: Middleware = (storeApi: MiddlewareAPI<Dispatch, RootState>) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count
  const result = next(action)
  const nextState = storeApi.getState().counter.count
  console.log(`
  Prev state: ${prevState},
    Dispatch action ${(action as Action).type}, 
      Next state: ${nextState}
  `)
  return result
}

const store = configureStore({
  reducer: {
    counter: counterReductor
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
