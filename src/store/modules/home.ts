import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {HomeState} from 'types/state';

const initialState: HomeState = {
    search: '',
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setSearch: (state: HomeState, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const {setSearch} = homeSlice.actions;

export default homeSlice.reducer;
