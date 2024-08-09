import { LOCALSTORAGE } from "@/constants/localstorage-key"
import {
  deleteLocalStorageData,
  getLocalStorageData,
  saveLocalStorageData,
} from "@/lib/localstorage"
import type { RootState } from "@/store"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface User {
  name: string | null
  token: string | null
}

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: (getLocalStorageData(LOCALSTORAGE.USER) as User) || {
    name: null,
    token: null,
  },
}

export const userSlice = createSlice({
  initialState,
  name: "user-slice",
  reducers: {
    clearUser: (state) => {
      state.user = null
      deleteLocalStorageData(LOCALSTORAGE.USER)
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      saveLocalStorageData(LOCALSTORAGE.USER, action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions

// getter func
export const getUser = (state: RootState) => state.user.user

export default userSlice.reducer
