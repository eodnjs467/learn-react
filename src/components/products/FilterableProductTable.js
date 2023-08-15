import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {useCallback, useState} from "react";
function FilterableProductTable(props) {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState('');

  const onChangeChecked = useCallback((e) => {
    setChecked(e.target.checked);
  }, []);
  const onChangeInput = useCallback((e) => {
    setInput(e.target.value);
  }, [input]);
  return(
      <>
        <SearchBar onChangeChecked={onChangeChecked} input={input} onChangeInput={onChangeInput} />
        <ProductTable data={props.data} filtered={checked} />
      </>
  )
}

export default FilterableProductTable;
