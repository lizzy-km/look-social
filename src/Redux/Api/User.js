import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

 const AccessKey = 'aMikd9b0_tQ9n2Ie63a2Z5CUut6Bj0cHwJ_4uTqcHTI';
 const keyPixel= '1QPzLcqtWlGk33n4Lgj6qKKi80NroyP5fNlUnH5JSDVDgW9mYUzdeswI'

//  EABktHGmTmAYBO0jzZA57Tt6kReQNSdZA7mWJWH59y3JoIvvd4PIqIErfgLKuxUsP1xMSZBdRg90IwoEtlBbsB9UDsV4zetBhTFFParli5sKk6Xx2t8gzkrYI0OSM1qkzz4nWRFouh7cgWGAs6jjhQDpifTGn8p3jguwjht6LkJ7TNtoTZAd9cDJntvttVhUfZBotxwDXl

 const token = 'v-3kbeaGhKxDTu3c4UXDYIKn_bKhCZ12poYXuCJMqaw'
export const UserApi = createApi({
    reducerPath:'UserAip',
     baseQuery: fetchBaseQuery({
     baseUrl: 'https://api.unsplash.com', 
    }),

    tagTypes: ['user'],

    endpoints: (builder) => ({
        
        user:builder.query({
            query:()=>({
                url:`/me/?client_id=${AccessKey}`,
                body:token,
                headers:{authorization: `Bearer ${AccessKey}` },
                params: {
                    per_page: 30,
                  },
            }),
            providesTags:['user']

        }),
       

    })
})
export const {useUserQuery} = UserApi