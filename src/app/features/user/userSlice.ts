import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export interface user {
  id: string,
  name: string,
  picture: string,
  favs: Array<string>
}
export interface UserInfo {
  /**
   * The display name of the user.
   */
  readonly displayName: string ;
  /**
   * The email of the user.
   */
  readonly email: string ;
  /**
   * The phone number normalized based on the E.164 standard (e.g. +16505550101) for the
   * user.
   *
   * @remarks
   * This is null if the user has no phone credential linked to the account.
   */
  readonly phoneNumber: string;
  /**
   * The profile photo URL of the user.
   */
  readonly photoURL: string ;
  /**
   * The provider used to authenticate the user.
   */
  readonly providerId: string;
  /**
   * The user's unique ID, scoped to the project.
   */
  readonly uid: string;
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