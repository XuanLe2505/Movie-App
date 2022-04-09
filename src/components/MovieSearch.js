import React from "react";
import useSearch from "../hooks/useSearch";
import { Button, Stack, TextField } from "@mui/material";

function MovieSearch() {
  let {
    keyword: searchInput,
    change: setSearchInput,
    submit: onSubmit,
  } = useSearch();

  return (
    <Stack direction="row" spacing={2}>
      <form onSubmit={onSubmit}>
        <TextField
          name="searchQuery"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </Stack>
  );
}

export default MovieSearch;
