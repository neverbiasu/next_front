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
    // 将已确认的任务沉到最底部，取消确认的任务回到原来的位置
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
      <h1 className="text-center text-2xl text-white mb-5">Going Out Checklist</h1>
      <div className="flex flex-col items-center">
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
        <div className="w-full max-w-2xl p-4 rounded border border-gray-300 bg-gradient-to-r from-blue-100 to-blue-200">
          {checkboxes.map((checkbox) => (
            <div
              key={checkbox.id}
              className={`flex items-center mb-2 justify-between p-2 rounded border border-gray-300 bg-gray-100 transition-all duration-300 ease-in-out transform ${checkbox.checked ? 'order-last' : ''}`}
            >
              <input
                type="checkbox"
                checked={checkbox.checked}
                onChange={() => toggleCheckbox(checkbox.id)}
                className="w-6 h-6 mr-2 flex-shrink-0 cursor-pointer transition-transform hover:scale-110"
              />
              <span
                className={`flex-grow text-stone-800 text-left mx-5 break-words ${checkbox.checked ? 'line-through' : ''}`}
              >
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
      </div>
    </Layout>
  );
};

export default GoingOutChecklist;
