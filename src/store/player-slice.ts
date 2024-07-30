import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

interface CurrentPlayerState {
    episode: string;
}

const initialState: CurrentPlayerState = {
    episode: "",
}

export const playerSlice = createSlice({
    name: 'player', initialState, reducers: {
        setCurrentEpisode: (state, action: PayloadAction<string>) => {
            state.episode = action.payload;
        },
    },
})

export const {setCurrentEpisode} = playerSlice.actions

export default playerSlice.reducer