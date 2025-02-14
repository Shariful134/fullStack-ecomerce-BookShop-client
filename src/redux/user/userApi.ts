/* eslint-disable @typescript-eslint/no-explicit-any */
import { TqueryParams, TResponseRedux } from "../../types/type";
import { baseApi } from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // createbook: builder.mutation({
    //   query: (data) => ({
    //     url: "/admin/create-book",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    getAllUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TqueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/admin//get-users",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: TResponseRedux<any>) => ({
        data: response?.data,
        meta: response?.meta,
      }),
    }),
    // getSingleBook: builder.query({
    //   query: (id) => ({
    //     url: `http://localhost:5000/api/v1/admin/book/${id}`,
    //     method: "GET",
    //   }),
    // }),
  }),
});
export const { useGetAllUserQuery } = userApi;
