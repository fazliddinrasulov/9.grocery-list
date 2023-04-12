import SingleItem from "./SingleItem";

type Item = {
  name: string;
  completed: boolean;
  id: string;
};
type Props = {
  items: Item[];
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
};

const Items = ({ items, removeItem, editItem }: Props) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
