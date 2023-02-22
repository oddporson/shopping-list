import ItemShow from "./ItemShow";

function ItemList({ items, onDelete }) {
  const renderedItems = items.map((item) => (
    <ItemShow key={item.id} item={item} onDelete={onDelete} />
  ));

  return <div>{renderedItems}</div>;
}

export default ItemList;
