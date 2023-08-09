import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl="https://coinpaprika1.p.rapidapi.com";

const exchangesHeaders=
{
    'X-RapidAPI-Key': 'ae6f24d54emshc367bd990ee8884p188e89jsn4a8bf97e684c',
    'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
  }

  const createRequest = (url)=>({url,headers:exchangesHeaders})

export const exchangesApi = createApi({
    reducerPath:"exchangesApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:
    (builder)=>({
        getExchanges: builder.query({query:()=>createRequest("/exchanges")})
    })
})

export const {useGetExchangesQuery}=exchangesApi