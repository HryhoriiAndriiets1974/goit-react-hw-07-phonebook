import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62e7ce640e5d74566afc5699.mockapi.io/',
  }),
  endpoints: builder => ({
    getContactsApi: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),
  delContact: builder.mutation({
    query: contactsId => ({
      url: `contacts/${contactsId}`,
      method: 'DELETE',
    }),
    invalidatesTags: ['Contacts'],
  }),
  createContact: builder.mutation({
    query: body => ({
      url: 'contacts',
      method: 'POST',
      body,
    }),
    invalidatesTags:  ['Contacts'],
  }),
  }),
});

export const {
  useGetContactsApiQuery,
  useDelContactMutation,
  useCreateContactMutation,
} = contactsApi;
