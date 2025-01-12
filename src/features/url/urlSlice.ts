import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UrlState {
  input: string
  output:string
}

const initialState: UrlState = {
  input:"",
  output:""
}

export const UrlSlice = createSlice({
  name: 'Url',
  initialState,
  reducers: {
    ChangeOutput: (state, action: PayloadAction<string>) => {
      state.output = action.payload
    },
    ChangeInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ChangeInput,ChangeOutput } = UrlSlice.actions

export default UrlSlice.reducer