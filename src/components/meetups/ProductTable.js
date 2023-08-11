import styles from './ProductTable.module.css';
import ProductCategory from "./ProductCategory";
function ProductTable(props) {
  return(
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {props.data.map((item) =>
                <ProductCategory
                  key={item.id}
                  category={item.category}
                  products={item.products}
                  stocked={item.stocked}
                  filtered={props.filtered}
              />
        )}
      </table>
  )
}

export default ProductTable;
