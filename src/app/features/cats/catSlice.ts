import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// define our slice state's type
interface catsState {
  cats: Array<Object>,
  currentCat: Cat,
  status: string
}
//Define our cat obj type
export interface rawCat {
  id: string,
  created_at: string,
  tags: Array<string>
}
//Define our cat obj type
export interface Cat {
  id: string,
  picture: string,
  created_at: string,
  tags: Array<string>
  likes: number,
  likes_ids: Array<string>,
  comments: Array<Object>
}
// define initial state using that type
const initialState : catsState = {
  cats: [],
  currentCat: {} as Cat,
  status: 'empty'
}
// async thunks coming up
// getACat
export const getCats = createAsyncThunk(
  'cats/getCats',
  async () => {
    const request = await fetch('https://cataas.com/api/cats?limit=10&skip=2')
    const response = await request.json()
    console.log(response)
    console.log(typeof response)
    return response
  }
)
export const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getCats.pending, (state)=>{
      state.status = 'loading'
    }),
    builder.addCase(getCats.fulfilled, (state, action)=>{
      state.cats = action.payload
      state.status = 'fulfilled'
    })
  }
})

export default catSlice.reducer
