import React from "react";
import SearchWidget from "material-ui-search-bar";
import styles from './SearchBar.module.css';

interface Props {
    onChange: (searchString: string) => void;
}

const SearchBar = ({onChange}: Props) => (
    <SearchWidget onChange={onChange} className={styles.SearchBar}/>
);

export default SearchBar;