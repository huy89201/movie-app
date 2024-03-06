import "./styles.scss";
import { useState } from "react";
import { useAppDispatch } from "../../store/hook";
import { changeQuery } from "../../store/slice/moiveSlice";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSearch = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!query) return;

    dispatch(changeQuery(query));
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="input-box"
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
      />
    </form>
  );
}
