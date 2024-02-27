import React from 'react';

const Checkbox = ({ label, checked, onChange, className }) => {
  const handleChange = (e) => {
    console.log(e.target.checked);
    onChange && onChange(e.target.checked);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
