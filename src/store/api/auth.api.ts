import { hideLoading, showLoading } from "react-redux-loading-bar"
import { setUser } from "../slice/user.slice"
import { apiEndpoint } from "./instance.api"

interface LoginArgs {
  email: string
  password: string
}

interface LoginResponse {
  id: string
  name: string
  email: string
  token: string
}

export const authApiSlice = apiEndpoint.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginArgs>({
      query: (args) => ({
        url: `auth/login`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email: args.email,
          password: args.password,
        },
      }),
      transformResponse: (response: { data: LoginResponse }) => {
        const user = response.data
        return user
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        dispatch(showLoading())
        try {
          const { data: user } = await queryFulfilled
          dispatch(setUser(user))
        } catch (error) {
          console.log("LOGG ERROR ON QUERYSTARTED LOGIN: ", error)
        }
        dispatch(hideLoading())
      },
    }),
  }),
})

export const { useLoginMutation } = authApiSlice
