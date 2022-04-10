import React from "react";
import { FSelect } from "./form";
// import useSort from "../hooks/useSort";

const SORT_OPTIONS = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  { value: "primary_release_date.desc", label: "Release Date Descending" },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "title.asc", label: "Title (A-Z)" },
  { value: "title.desc", label: "Title (Z-A)" },
];
function MovieSort() {
  // let { keyword: sortInput, change: setSortInput } = useSort();
  return (
    <div>
      <FSelect
        name="sortBy"
        size="small"
        sx={{ width: 300 }}
        // value={sortInput}
        // onChange={(e) => setSortInput(e.target.value)}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FSelect>
    </div>
  );
}

export default MovieSort;
