import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "53f8b703fcmshd420b3ebcbd5c40p1cea85jsn3e5e4f98f23b",
  "X-RapidAPI-Host": "investing4.p.rapidapi.com",
};
  
const baseUrl = "https://investing4.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (Name) => createRequest(`/candlestick-patterns`),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
