import FilterableProductTable from "../components/meetups/FilterableProductTable";

function SearchPage() {
  const Fruits = [
    {id: 1, name: 'Apple', price: '$1', stocked: true},
    {id: 2, name: 'Dragonfruit', price: '$1', stocked: true},
    {id: 3, name: 'Passionfruit', price: '$2', stocked: false},
  ];
  const Vegetables = [
    {id: 1, name: 'Spinach', price: '$2', stocked: true},
    {id: 2, name: 'Pumpkin', price: '$4', stocked: false},
    {id: 3, name: 'Peas', price: '$1', stocked: true},
  ]
  const data = [
    {id: 1, category: 'Fruits', products: Fruits},
    {id: 2, category: 'Vegetables', products: Vegetables}
  ]
  return(
      <FilterableProductTable data={data} />
  )
}

export default SearchPage;
