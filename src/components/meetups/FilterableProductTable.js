import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {useCallback, useState} from "react";
function FilterableProductTable(props) {
  const [checked, setChecked] = useState(false);
  const onChangeChecked = useCallback((e) => {
    setChecked(e.target.checked);
  }, []);
  return(
      <>
        <SearchBar checked={checked} onChangeChecked={onChangeChecked} />
        <ProductTable data={props.data} filtered={checked} />
      </>
  )
}

export default FilterableProductTable;
