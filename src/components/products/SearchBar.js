import './SearchBar.module.css';
function SearchBar({ onChangeChecked, input, onChangeInput }) {
  return(
      <>
        <div>
          <label htmlFor="search-bar" />
          <input type="text" placeholder={"Search..."} value={input} onChange={onChangeInput}/>
        </div>
        <div>
          <input type="checkbox" onChange={onChangeChecked}/>
          <p>Only show products in stock</p>
        </div>
      </>
  )
}

export default SearchBar;
