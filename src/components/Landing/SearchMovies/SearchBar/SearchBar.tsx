import React from "react";
import SearchWidget from "material-ui-search-bar";
import styles from './SearchBar.module.css';

const SearchBar = () => (<SearchWidget className={styles.SearchBar} value={'test'}/>);

export default SearchBar;