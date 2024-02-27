import React, { useState } from 'react';
import './style.css';
import Checkbox from '../component/Checkbox';
import { list } from '../List';

export default function App() {
  const [listItems, setListItems] = useState(list);

  const handleSelectAll = (checkedValue) => {
    let temp = listItems.map((el) => {
      return {
        ...el,
        checked: checkedValue,
      };
    });
    setListItems(temp);
  };

  const handleChecked = (element, checkedValue) => {
    let temp = listItems.map((el) =>
      el.id === element.id ? { ...el, checked: checkedValue } : el
    );
    setListItems(temp);
  };
  return (
    <div>
      <Checkbox
        label="Select All"
        checked={
          listItems.filter((el) => el.checked !== true).length < 1
            ? true
            : false
        }
        onChange={(checked) => handleSelectAll(checked)}
      />
      <form>
        {listItems.map((item) => (
          <Checkbox
            label={item.name}
            key={item.id}
            checked={item.checked}
            onChange={(checked) => handleChecked(item, checked)}
          />
        ))}
      </form>
    </div>
  );
}
