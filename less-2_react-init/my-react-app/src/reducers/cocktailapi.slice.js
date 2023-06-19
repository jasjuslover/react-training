import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SEARCH_BY_FIRST_LETTER = "/search.php?f=";
const GET_DRINK_BY_ID = "/lookup.php?i=";

const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    searchByFirstLetter: builder.query({
      query: (letter) => `${SEARCH_BY_FIRST_LETTER}${letter}`,
      providesTags: (result = []) =>
        result && result?.drinks
          ? [
              ...result?.drinks.map(({ idDrink }) => ({
                type: "Drink",
                id: idDrink,
              })),
              { type: "Drink", id: "PARTIAL-LIST" },
            ]
          : [{ type: "Drink", id: "PARTIAL-LIST" }],
    }),
    getDrinkDetailById: builder.query({
      query: (idDrink) => `${GET_DRINK_BY_ID}${idDrink}`,
      providesTags: (result) => [
        {
          type: "Drink",
          id:
            result && result.drinks ? result.drinks[0].idDrink : "PARTIAL-LIST",
        },
      ],
    }),
  }),
});

export const {
  useSearchByFirstLetterQuery,
  useGetDrinkDetailByIdQuery,
  usePrefetch,
} = cocktailApi;
export { cocktailApi };
