import { useState } from "react";

type Item = {
  name: string;
  completed: boolean;
  id: string;
};
type Props = {
  item: Item;
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
};
const SingleItem = ({ item, removeItem, editItem }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(item.completed);
  const handleChange = () => {
    setIsChecked(!isChecked);
    editItem(item.id);
  };
  return (
    <div className="single-item">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <p
        className={`${isChecked && "line-through"}`}
        style={{ textTransform: "capitalize" }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
