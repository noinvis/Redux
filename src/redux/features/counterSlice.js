import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1
  },
  reducers: {
    laylo: (state) => {
      state.value += 1
    },
    dec: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 1
    }
  }
})

export const { laylo, dec, reset } = counterSlice.actions

export default counterSlice.reducer































