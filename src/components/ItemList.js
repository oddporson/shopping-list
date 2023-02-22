import ItemShow from "./ItemShow";

function ItemList({ items }) {
  const renderedItems = items.map((item) => (
    <ItemShow key={item.id} item={item} />
  ));

  return <div>{renderedItems}</div>;
}

export default ItemList;
