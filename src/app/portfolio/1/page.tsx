'use client';

import { useState } from 'react';
import Layout from '@/app/layout';

const GoingOutChecklist = () => {
  const [checkboxes, setCheckboxes] = useState([{ id: 1, checked: false, value: '' }]);
  const [inputValue, setInputValue] = useState('');

  const addCheckbox = () => {
    setCheckboxes([
      ...checkboxes,
      { id: checkboxes.length + 1, checked: false, value: inputValue }
    ]);
    setInputValue('');
  };

  const removeCheckbox = (id: number) => {
    setCheckboxes(checkboxes.filter((checkbox) => checkbox.id !== id));
  };

  const toggleCheckbox = (id: number) => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };

  return (
    <Layout>
      <h1 className="text-center text-2xl text-white mb-5">Going Out Checklist</h1>
      <div className="items-center">
        <div className="flex mb-5 items-center justify-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter checkbox text here❤"
            className="w-60 p-2 text-base text-gray-800 rounded border border-gray-300 mr-2 text-center"
          />
          <button
            onClick={addCheckbox}
            className="p-2 text-base rounded border-none bg-blue-500 text-white cursor-pointer"
          >
            Add it!
          </button>
        </div>
        {checkboxes.map((checkbox) => (
          <div
            key={checkbox.id}
            className="flex items-center mb-2 justify-between p-2 rounded border border-gray-300 bg-gray-100 w-full max-w-2xl mx-auto"
          >
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => toggleCheckbox(checkbox.id)}
              className="w-6 h-6 mr-2 flex-shrink-0 cursor-pointer transition-transform hover:scale-110"
            />
            <span className="flex-grow text-stone-800 text-center mx-5 break-words">
              {checkbox.value}
            </span>
            <button
              onClick={() => removeCheckbox(checkbox.id)}
              className="p-1 text-sm rounded border-none bg-red-500 text-white cursor-pointer flex-shrink-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default GoingOutChecklist;
