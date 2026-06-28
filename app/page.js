"use client";

import React, { useState } from 'react'; // Added useState
import useCounterStore from "@/store/useCounterStore";

export default function Counter() {
  const { count, increaseCount, decreaseCount, resetCount, doubleCount, addCustomAmount } = useCounterStore();
  
  // Local state to keep track of what the user types
  const [inputValue, setInputValue] = useState('');

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stops the page from refreshing
    
    const amount = parseInt(inputValue, 10);
    
    if (!isNaN(amount)) {
      addCustomAmount(amount); // Sends the number to your Zustand store
      setInputValue(''); // Clears the input field after submitting
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-100 ">
      <div className="p-8 rounded-2xl bg-slate-800 shadow-xl border border-slate-700 text-center w-max mx-4 ">
        
        <h2 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          Age Counter
        </h2>
        
        <div className="text-7xl font-extrabold text-white tracking-tight my-6 tabular-nums">
          {count}
        </div>
        
        <p className="text-slate-400 text-sm mb-8">
          {count === 1 ? 'year old' : 'years old'}
        </p>

        <div className="grid grid-cols-3 justify-items-center gap-4 mb-6">
          <button 
            onClick={decreaseCount}
            className="px-4 py-3 bg-slate-700 hover:bg-slate-600 active:scale-95 transition rounded-xl font-medium text-lg w-full"
          >
            -
          </button>

          <button 
            onClick={doubleCount}
            className='px-4 py-3 bg-white hover:bg-indigo-500 active:scale-95 transition rounded-xl font-medium text-lg text-indigo-600 w-full'
          > 
            double
          </button>
          
          <button 
            onClick={increaseCount}
            className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition rounded-xl font-medium text-lg text-white w-full"
          >
            +
          </button>
          
          <button 
            onClick={resetCount}
            className="col-span-3 mt-2 py-2 text-sm text-slate-400 hover:text-slate-200 transition font-medium w-full text-center"
          >
            Reset Age
          </button>
        </div>

        {/* FINISHED FORM SECTION WITH STYLING */}
        <div className="border-t border-slate-700 pt-6">
          <form onSubmit={handleSubmit} className="flex gap-2 justify-between">
            <input 
              type="number" // Restricts input to numbers only
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Updates local state
              placeholder="Add custom years..."
              className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm w-44"
            />
            <button 
              type='submit' 
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition rounded-xl font-medium text-sm text-white"
            > 
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
