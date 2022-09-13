import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export interface user {
  id: string,
  name: string | null,
  picture: string | null,
  favs: Array<string>
}
// define our slice state's type
interface userState {
  user: user,
  logged: boolean,
  status: string
}
// define initial state
const initialState : userState = { 
  user: {} as user,
  logged: false,
  status: 'empty'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser : (state, action) =>{
      state.user = action.payload
      state.logged = true
    }

  },
  extraReducers: (builder) => {

  }
})
export const  { setUser } = userSlice.actions
export default userSlice.reducer