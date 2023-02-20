import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
// ...
import homeReducer from 'store/modules/home';

const reducer = {
    home: homeReducer,
};

export const store = configureStore({
    reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
