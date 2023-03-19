import React, { useState } from 'react';

const SelectionFrom = () => {
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');
  const [select3, setSelect3] = useState('');
  const [select4, setSelect4] = useState('');
  const [select5, setSelect5] = useState('');
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [description, setDescription] = useState('');

  const handleSelect1Change = (event) => {
    setSelect1(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelect2(event.target.value);
  };

  const handleSelect3Change = (event) => {
    setSelect3(event.target.value);
  };

  const handleSelect4Change = (event) => {
    setSelect4(event.target.value);
  };

  const handleSelect5Change = (event) => {
    setSelect5(event.target.value);
  };

  const handleDropdown1Change = (event) => {
    setDropdown1(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addNewOption = () => {

  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <select value={select1} onChange={handleSelect1Change}>
            <p>Category</p>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          {select1 === '' && (
            <button onClick={addNewOption}>
              <span style={{ marginRight: '5px' }}>+</span>Add New
            </button>
          )}
        </div>
        <div>
          <select value={select2} onChange={handleSelect2Change}>
            <p>Topic</p>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          {select1 === '' && (
            <button onClick={addNewOption}>
              <span style={{ marginRight: '5px' }}>+</span>Add New
            </button>
          )}
        </div>
        <div>
          <select value={select3} onChange={handleSelect3Change}>
            <option value="">Select 3</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <select value={select4} onChange={handleSelect4Change}>
            <option value="">Select 4</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <div>
          <select value={select5} onChange={handleSelect5Change}>
            <option value="">Select 5</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
          </select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
          <div>
            <select value={dropdown1} onChange={handleDropdown1Change}>
              <option value="">Dropdown 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div>
            <select value={dropdown2} onChange={handleDropdown2Change}>
              <option value="">Dropdown 2</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
        <div style={{ marginLeft: '10px' }}>
          <textarea value={description} onChange={handleDescriptionChange} />
        </div>
      </div>
    </div>
  )
}

export default SelectionFrom;
