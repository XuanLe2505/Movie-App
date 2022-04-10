import { Alert, Box, Container, Pagination, Stack } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import MovieList from "../components/MovieList";
import LoadingScreen from "../components/LoadingScreen";
import tmdbApi from "../app/tmdbApi";
import FilterGenres from "../components/FilterGenres";
import MovieSearch from "../components/MovieSearch";
import MovieSort from "../components/MovieSort";

import { useForm } from "react-hook-form";
import { FormProvider } from "../components/form";

const defaultValues = {
  sortBy: "",
};

function BrowsePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [idFilter, setIdFilter] = useState("");

  const methods = useForm({ defaultValues });
  const { watch } = methods;
  const sortBy = watch("sortBy");

  useEffect(() => {
    const getMoviesList = async () => {
      setLoading(true);
      const params = {
        page: currentPage,
        with_genres: idFilter,
        sort_by: sortBy,
      };
      try {
        const response = await tmdbApi.getMovies(params);
        setMovies(response.results);
        setTotalPage(response.total_pages);
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    getMoviesList();
  }, [currentPage, idFilter, sortBy]);

  const handleChange = (event, value) => {
    console.log(value);
    setCurrentPage(value);
  };

  return (
    <>
      {/* <MovieSearch/> */}
      <FormProvider methods={methods}>
        <MovieSort />
      </FormProvider>
      <FilterGenres movies={movies} setIdFilter={setIdFilter} />
      <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
        <Stack sx={{ flexGrow: 1 }}>
          <Box sx={{ position: "relative", height: 1 }}>
            {loading ? (
              <LoadingScreen />
            ) : (
              <>
                {error ? (
                  <Alert severity="error">{error}</Alert>
                ) : (
                  <MovieList movies={movies} />
                )}
              </>
            )}
          </Box>
        </Stack>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}>
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </>
  );
}

export default BrowsePage;
