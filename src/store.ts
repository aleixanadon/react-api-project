import { configureStore } from '@reduxjs/toolkit'
import catApiSlice from './features/catApi/catApiSlice'

export const store = configureStore({
  reducer: {
    catApi: catApiSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch