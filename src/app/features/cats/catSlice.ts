import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// define our slice state's type
interface catState {
  cat : Cat,
  // cats: Array<Object>,
  // currentCat: Cat,
  // currentCatIndex: number,
  status: string
}
//Define our cat obj type
export interface rawData {
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
const initialState : catState = {
  cat: {} as Cat,
  // cats: [] as Array<rawCat>,
  // currentCat: {} as Cat,
  // currentCatIndex: 0,
  status: 'empty'
}
// async thunks coming up
// getACat
export const getCat = createAsyncThunk(
  'cats/getCats',
  async () => {
    const request = await fetch(import.meta.env.VITE_API_URL)
    const response = await request.json()
    let data : rawData = response
    let cat : Cat = {} as Cat
    cat.id = data.id
    cat.picture = data.id
    cat.created_at = data.created_at
    if(data.tags.length>0){
      cat.tags = data.tags
    } 
    return cat
  }
  
)
export const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    // init: (state) => {
    //   let cc : Cat = {} as Cat
    //   let initCat : rawCat = state.cats[0] as rawCat
    //   cc.id = initCat.id
    //   cc.picture = initCat.id
    //   cc.tags = initCat.tags
    //   cc.created_at = initCat.created_at
    //   state.currentCat = cc
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getCat.pending, (state)=>{
      state.status = 'loading'
    }),
    builder.addCase(getCat.fulfilled, (state, action)=>{
      state.cat = action.payload
      state.status = 'fulfilled'
    })
  }
})

// export const { init } = catSlice.actions
export default catSlice.reducer
