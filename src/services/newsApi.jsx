import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const newsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "ae6f24d54emshc367bd990ee8884p188e89jsn4a8bf97e684c",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: newsHeaders });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const {useGetNewsQuery} = newsApi;
