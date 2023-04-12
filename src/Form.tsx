import { useState } from "react";

type Props = {
  addItem: (itemName: string) => void;
};

const Form = ({ addItem }: Props) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newItemName) {
      addItem(newItemName);
    }
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery list</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
