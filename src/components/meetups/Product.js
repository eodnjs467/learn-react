import styles from './Product.module.css';
function Product(props) {
  if (props.filtered && !props.stocked) {
    return null;
  }
  const name = props.stocked ?
      props.name :
      <span className={styles.stocked}>{props.name}</span>;
  return (
      <tr className={styles.tr}>
        <td>{name}</td>
        <td>{props.price}</td>
      </tr>
  );
}

export default Product;
