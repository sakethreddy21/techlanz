
import { useState } from "react";
const InputField = ({ label, spanText, showRange, value, setValue, placeholder, alert }: any) => {
  const [error, setError] = useState<string | null>(null); 

  const handleInputChange = (e: any) => {
    const newValue = Number(e.target.value);


    if (newValue < 0) {
      setError(alert); 
    } else {
      setError(null); 
      setValue(newValue); 
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap sm:flex-row sm:gap-20 gap-4 items-center">
        <label className="text-[#333333] font-bold sm:font-medium whitespace-nowrap w-[150px]">
          {label}
        </label>
        <div className="flex items-center border border-gray-300 rounded-xl w-full sm:w-[200px] sm:max-w-none">
          <input
            type="number"
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder} // Add placeholder
            className="p-2 w-full bg-[#F5F7FA] rounded-xl text-left focus:outline-none"
          />
          <span className="bg-teal-500 rounded-r-lg text-white p-2 font-bold">
            {spanText}
          </span>
        </div>
      </div>
      {showRange && (
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleInputChange}
          className="bg-[#F5F7FA] rounded-xl text-left focus:outline-none"
        />
      )}
      {/* Display alert message if there's an error */}
      {error && <div className="text-red-600">{error}</div>} {/* Alert for negative values */}
    </div>
  );
};

export default InputField
