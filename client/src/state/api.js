import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Projects",
    "Collaborators",
    "Allocations",
    "Partners",
    "Revenues",
    "Admins",
    "Performance",
    "Dashboard"
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    // OK
    getProjects: build.query({
      query: () => `client/projects`,
      providesTags: ["Projects"],
    }),

    // customers -> collaborators
    getCollaborators: build.query({
      query: () => "client/collaborators",
      providesTags: ["Collaborators"],
    }),

    // OK
    getAllocations: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/allocations",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Allocations"],
    }),

    // OK
    getPartners: build.query({
      query: () => "client/partners",
      providesTags: ["Partners"],
    }),

    // OK
    getRevenues: build.query({
      query: () => "revenues/revenues",
      providesTags: ["Revenues"],
    }),

    // Ok
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }), 

    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),

    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),

  }),
});

export const {
  useGetUserQuery,
  useGetProjectsQuery,
  useGetCollaboratorsQuery,
  useGetAllocationsQuery,
  useGetPartnersQuery,
  useGetRevenuesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
