import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoHeaders = {
    'X-RapidAPI-Key': 'ae6f24d54emshc367bd990ee8884p188e89jsn4a8bf97e684c',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl ='https://coinranking1.p.rapidapi.com'

const createRequest = (url)=>({url,headers:cryptoHeaders})


export const cryptoApi = createApi({
    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({query:(count)=>createRequest(`/coins?limit=${count}`)}),
        getCryptoDetails: builder.query({query:(id)=>createRequest(`/coin/${id}`)}),
        getCryptoHistory: builder.query({query:({coinid,timePeriod})=>createRequest(`/coin/${coinid}/history?timePeriod=${timePeriod}`)}),
        getCryptoExchanges: builder.query({query:()=>createRequest(`/exchanges`)}),
    })
})
export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetCryptoExchangesQuery,
}= cryptoApi;
