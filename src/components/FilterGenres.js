import React, { useEffect, useState } from "react";
import tmdbApi from "../app/tmdbApi";
import Context from "../contexts/FilterContext";

const FilterGenres = ({movies}) => {
  const [genres, setGenres] = useState();
  const [idFilter, setIdFilter] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await tmdbApi.getMovieGenres();
        setGenres(response.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {genres?.map(({ name, id }) => (
        <button key={id} onClick={() => setIdFilter(id)}>
          {name}
        </button>
      ))}
      {idFilter && <Context idFilter={idFilter} />}
    </div>
  );
};

export default FilterGenres;
