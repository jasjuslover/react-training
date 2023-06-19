import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { aw } from "../utils/aw";
import { preload } from "swr";
import { fw } from "../utils/fw";
import {
  useGetDrinkDetailByIdQuery,
  usePrefetch,
} from "../reducers/cocktailapi.slice";

const DrinkItem = ({ drink }) => {
  const prefetch = usePrefetch("getDrinkDetailById");

  return (
    <Link to={`/${drink.idDrink}`}>
      <p
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "8px 8px",
        }}
        onMouseOver={
          () => {
            prefetch(drink.idDrink);
          }
          //   preload(
          //     [
          //       import.meta.env.VITE_API_URL,
          //       `/lookup.php?i=${drink.idDrink}`,
          //       "GET",
          //     ],
          //     ([url, endpoint, method]) => fw({ url, endpoint, method })
          //   )
        }
      >
        {drink.strDrink}
      </p>
    </Link>
  );
};

export default DrinkItem;
