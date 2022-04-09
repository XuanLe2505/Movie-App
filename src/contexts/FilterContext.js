import React, { useEffect, useState } from "react";
import tmdbApi from "../app/tmdbApi";

const Context = ({ idFilter }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const params = { with_genres: idFilter };
        const response = await tmdbApi.getMovies(params);
        setData(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [idFilter]);

  return (
    <>
      {data?.map((movie) => (
        <div>
          <p>title: {movie.title}</p>
          <p>genre id: {movie.genre_ids.map((id) => `${id} ,`)} </p>
          <br />
        </div>
      ))}
    </>
  );
};

export default Context;
