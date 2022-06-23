import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62a9e008371180affbc9d9cd.mockapi.io/api/v1/' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `contacts`,
            providesTags: ['Contacts'],
        }),
        getContactsByName: builder.query({
            query: (name) => `contacts/?name=${name}`,
            providesTags: ['Contacts'],
        }),
        deleteContacts: builder.mutation({
            query: (contactId) => ({
                url: `contacts/${contactId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Contacts'],
        }),
        addContacts: builder.mutation({
            query: (newContact) => ({
                url: 'contacts',
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags: ['Contacts'],
        })
    }),
});

export const {
    useGetContactsQuery,
    useGetContactsByNameQuery,
    useDeleteContactsMutation,
    useAddContactsMutation,
} = contactsApi;
