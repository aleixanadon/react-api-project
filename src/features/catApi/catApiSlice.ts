import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CatEntry {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatApiState {
  data: CatEntry[]
}

const initialState: CatApiState = {
  data: [],
}

export const catApiSlice = createSlice({
  name: 'catApi',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<CatEntry[]>) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadData } = catApiSlice.actions

export default catApiSlice.reducer