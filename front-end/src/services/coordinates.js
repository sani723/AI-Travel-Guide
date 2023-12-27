import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const initialState = [
//     { lat: 25.2048, long: 55.2708 },
    
// ];

export const coordinatesApi = createApi({
    reducerPath: 'coordinates',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
    endpoints: (builder) => ({
      getCoordinates: builder.query({
        query: (locationName) => `dest-coordinates?location=${locationName}`,
      }),
      // getCoordinates: builder.mutation({
      //   // Use a POST request and send 'locationName' in the body
      //   query: (locationName) => ({
      //     url: '/travel-query',
      //     method: 'POST',
      //     body: { query: locationName },
      //   }),
      // }),
    }),
  })

export const { useLazyGetCoordinatesQuery } = coordinatesApi;