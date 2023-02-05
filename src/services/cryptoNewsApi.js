import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "53f8b703fcmshd420b3ebcbd5c40p1cea85jsn3e5e4f98f23b",
  "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
};
  
const baseUrl = "https://crypto-news16.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (count) => createRequest(`/news/top/20?limit${count}`),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
