import React, { useEffect, useState } from "react";
import DrinkItem from "./DrinkItem";
import { fw } from "../utils/fw";
import axios from "axios";
import { awBasic } from "../utils/aw";
import useSWR, { preload } from "swr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchByFirstLetter } from "../reducers/cocktail.slice";
import {
  usePrefetch,
  useSearchByFirstLetterQuery,
} from "../reducers/cocktailapi.slice";

const FetchApi = () => {
  const SEARCH_BY_FIRST_LETTER = "/search.php?f=";

  //   const [drinks, setDrinks] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [doFetch, setDoFetch] = useState(false);
  const [letter, setLetter] = useState("a");

  //   const { data, error, isLoading } = useSWR(
  //     [import.meta.env.VITE_API_URL, `${SEARCH_BY_FIRST_LETTER}${letter}`, "GET"],
  //     ([url, endpoint, method]) => fw({ url, endpoint, method })
  //   );

  //   const dispatch = useDispatch();
  //   const cocktail = useSelector((state) => state.cocktail);

  //   //   console.log(cocktail);

  //   const doSearchByFirstLetter = () => {
  //     dispatch(
  //       searchByFirstLetter({
  //         url: import.meta.env.VITE_API_URL,
  //         endpoint: `${SEARCH_BY_FIRST_LETTER}${letter}`,
  //         method: "GET",
  //       })
  //     );
  //   };

  //   useEffect(() => {
  //     //   setTimeout(() => {
  //     //     setDoFetch(true);
  //     //   }, 3000);
  //     doSearchByFirstLetter();
  //   }, []);

  //   const asyncFetchCocktailsByFirstLetter = async () => {

  //     // const resRaw = await fetch(
  //     //   `${import.meta.env.VITE_API_URL}${SEARCH_BY_FIRST_LETTER}`
  //     // );
  //     // const json = await resRaw.json();

  //     // setDrinks(json.drinks);

  //     try {
  //       const response = await fw({
  //         url: import.meta.env.VITE_API_URL,
  //         endpoint: SEARCH_BY_FIRST_LETTER,
  //       });

  //       if (response.unAuthorized) {
  //         console.log(response.message);
  //         return;
  //       }

  //       if (response.message) {
  //         console.log(response.message);
  //         return;
  //       }

  //       setDrinks(response.drinks);
  //     } catch (error) {
  //       console.error(response);
  //     }
  //   };

  //   const axiosGetCocktailsByFirstLetter = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await awBasic.get(SEARCH_BY_FIRST_LETTER);

  //       console.log(response.data);
  //       setDrinks(response.data.drinks);
  //     } catch (error) {
  //       //   console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     // asyncFetchCocktailsByFirstLetter();
  //     axiosGetCocktailsByFirstLetter();
  //   }, []);

  const { data, isLoading, error } = useSearchByFirstLetterQuery(letter);
  const prefetch = usePrefetch("searchByFirstLetter");

  return (
    <div>
      <h1>Fetching Drinks</h1>
      <div>
        <Link to="/user">Go To Users</Link>
      </div>
      <button onClick={() => setLetter("a")}>A</button>
      <button
        onClick={() => setLetter("b")}
        onMouseOver={
          () => prefetch("b")
          //   preload(
          //     [import.meta.env.VITE_API_URL, `${SEARCH_BY_FIRST_LETTER}b`, "GET"],
          //     ([url, endpoint, method]) => fw({ url, endpoint, method })
          //   )
        }
      >
        B
      </button>
      {isLoading && <p>Loading ....</p>}
      {data && data?.drinks
        ? data.drinks.map((drink) => (
            <DrinkItem key={drink.idDrink} drink={drink} />
          ))
        : null}
    </div>
  );
};

export default FetchApi;
