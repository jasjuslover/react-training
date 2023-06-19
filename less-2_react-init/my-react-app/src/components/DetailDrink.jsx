import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { aw } from "../utils/aw";
import { useGetDrinkDetailByIdQuery } from "../reducers/cocktailapi.slice";

const DetailDrink = () => {
  const params = useParams();

  const { data, isLoading } = useGetDrinkDetailByIdQuery(params.id);
  const drink = data?.drinks?.[0] || null;

  // const [drinkDetail, setDrinkDetail] = useState(null);

  // const getDetailById = async () => {
  //   const GET_DETAIL_BY_ID = `/lookup.php?i=${params.id}`;
  //   aw()
  //     .get(GET_DETAIL_BY_ID)
  //     .then((response) => {
  //       const { data } = response;
  //       if (data.drinks.length) {
  //         setDrinkDetail(data.drinks[0]);
  //       }
  //     });
  // };

  // console.log(drinkDetail);

  // useEffect(() => {
  //   if (params.id) getDetailById();
  // }, [params]);

  return (
    <div>
      <h1>Detail Drink</h1>
      <p>Name: {drink ? drink.strDrink : ""}</p>
      <p>Category: {drink ? drink.strCategory : ""}</p>
    </div>
  );
};

export default DetailDrink;
