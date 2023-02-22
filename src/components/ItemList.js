import ItemShow from "./ItemShow";

function ItemList({ items, onDelete, onEdit }) {
  const renderedItems = items.map((item) => (
    <ItemShow key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
  ));

  return <div>{renderedItems}</div>;
}

export default ItemList;
