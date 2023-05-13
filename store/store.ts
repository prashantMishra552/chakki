import { configureStore } from '@reduxjs/toolkit'
// ...
import AppReducer from '../frontend/src/App/appSlice'
declare const window: Window &
    typeof globalThis & {
        INITIAL_STATE: any
    }

export const store = configureStore({
    reducer: {
        app: AppReducer,
    },
    preloadedState: window.INITIAL_STATE ?? {}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch