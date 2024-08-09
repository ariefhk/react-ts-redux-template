import { LOCALSTORAGE } from "@/constants/localstorage-key"
import { getLocalStorageData } from "@/lib/localstorage"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Utility function to prepare headers
const prepareAuthHeaders = (headers: Headers) => {
  const token = getLocalStorageData(LOCALSTORAGE.TOKEN) as string | null

  // Debug token
  // console.log("DEBUG TOKEN: ", token)

  if (token) {
    headers.set("Authorization", `Bearer ${token}`)
  }
  return headers
}

// public endpoint
export const apiEndpoint = createApi({
  reducerPath: "PUBLIC_ENDPOINT",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env?.VITE_BASE_API_URL as string,
  }),
  endpoints: () => ({}),
})

// protected endpoint with JWT
export const protectedApiEndpoint = createApi({
  reducerPath: "PROTECTED_ENDPOINT",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env?.VITE_BASE_API_URL as string,
    prepareHeaders: prepareAuthHeaders,
  }),
  endpoints: () => ({}),
})

export const protectApiEndpointTag = protectedApiEndpoint.enhanceEndpoints({
  addTagTypes: ["AUTH", "USER"],
})
