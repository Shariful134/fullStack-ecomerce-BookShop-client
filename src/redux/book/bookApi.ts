import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: "/admin/allbooks",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllBooksQuery } = authApi;
