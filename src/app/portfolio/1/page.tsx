'use client';

import { useState } from 'react';
import Layout from '@/app/layout';

interface Checkbox {
  id: number;
  checked: boolean;
  value: string;
  order: number;
}

const GoingOutChecklist = () => {
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addCheckbox = () => {
    if (inputValue.trim() !== '') {
      setCheckboxes([
        ...checkboxes,
        { id: checkboxes.length + 1, checked: false, value: inputValue, order: checkboxes.length }
      ]);
      setInputValue('');
    }
  };

  const removeCheckbox = (id: number) => {
    setCheckboxes(checkboxes.filter((checkbox) => checkbox.id !== id));
  };

  const toggleCheckbox = (id: number) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );
    updatedCheckboxes.sort((a, b) => {
      if (a.checked === b.checked) {
        return a.order - b.order;
      }
      return Number(a.checked) - Number(b.checked);
    });
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <Layout>
      <h1 className="text-center text-2xl mb-5 dark:text-white">Going Out Checklist</h1>
      <div className="flex flex-col items-center">
        <div className="flex mb-5 items-center justify-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter checkbox text here❤"
            className="w-60 p-2 text-base rounded border mr-2 text-center text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          />
          <button
            onClick={addCheckbox}
            className="p-2 text-base rounded border-none cursor-pointer bg-blue-500 text-white"
          >
            Add it!
          </button>
        </div>
        <div className="w-full md:w-1/2 h-screen p-4 rounded border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 mx-auto">
          {checkboxes.map((checkbox) => (
            <div
              key={checkbox.id}
              className={`flex items-center mb-2 justify-between p-2 rounded border transition-all duration-300 ease-in-out transform ${checkbox.checked ? 'order-last' : ''} bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600`}
            >
              <input
                type="checkbox"
                checked={checkbox.checked}
                onChange={() => toggleCheckbox(checkbox.id)}
                className="w-6 h-6 mr-2 flex-shrink-0 cursor-pointer transition-transform hover:scale-110"
              />
              <span
                className={`flex-grow text-left mx-5 break-words ${checkbox.checked ? 'line-through' : ''} text-gray-800 dark:text-gray-200`}
              >
                {checkbox.value}
              </span>
              <button
                onClick={() => removeCheckbox(checkbox.id)}
                className="p-1 text-sm rounded border-none cursor-pointer flex-shrink-0 bg-red-500 text-white"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GoingOutChecklist;
