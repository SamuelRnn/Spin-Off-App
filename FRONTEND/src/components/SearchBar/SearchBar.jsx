import styles from "./SearchBar.module.scss";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMatchingMovies, setSearchTitle } from "../../redux/actions";

function SearchBar({ setSearchDone }) {
  const [inputValue, setinputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setinputValue(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getMatchingMovies(inputValue));
    setinputValue("");
    setSearchDone(true)
    dispatch(setSearchTitle(inputValue))
    console.log('me envie')
  };

  return (
    <div className={styles.search_bar}>
      <form onSubmit={handleSearch} className={styles.input}>
        <input
          placeholder="Busca películas y series..."
          onChange={handleChange}
          type="text"
          value={inputValue}
        />
        <button type="submit">
          <HiSearch className={styles.search_icon} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
