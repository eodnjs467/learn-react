import styles from './SearchBar.module.css';
function SearchBar({ onChangeChecked }) {
  return(
      <>
        <div>
          <label htmlFor="search-bar" />
          <input type="text" placeholder={"Search..."}/>
        </div>
        <div>
          <input type="checkbox" onChange={onChangeChecked}/>
          <p>Only show products in stock</p>
        </div>
      </>
  )
}

export default SearchBar;
