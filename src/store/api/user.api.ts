import { hideLoading, showLoading } from "react-redux-loading-bar"
import { protectApiEndpointTag } from "./instance.api"

interface GetCurrentUserResponse {
  id: string
  name: string
  email: string
}

export const userApi = protectApiEndpointTag.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<GetCurrentUserResponse, any>({
      query: () => {
        return {
          url: `auth/me`,
          method: "GET",
        }
      },
      transformResponse: (response: { data: GetCurrentUserResponse }) => {
        const user = response.data
        return user
      },
      providesTags: () => [{ type: "USER", id: "CURRENT_USER" }],
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        dispatch(showLoading())
        try {
          await queryFulfilled
        } catch (error) {
          console.log("LOGG ERROR ON QUERYSTARTED GET CURRENT USER: ", error)
        }
        dispatch(hideLoading())
      },
    }),
  }),
})

export const { useGetCurrentUserQuery } = userApi
