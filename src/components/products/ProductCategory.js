import Product from "./Product";
import styles from './ProductCategory.module.css';

function ProductCategory(props) {
  return(
      <tbody>
        <tr className={styles.tr}>
          <td>{props.category}</td>
        </tr>
        {props.products.map((item) =>
            <Product
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                stocked={item.stocked}
                filtered={props.filtered}
            />
        )}
      </tbody>
  )
}

export default ProductCategory;
