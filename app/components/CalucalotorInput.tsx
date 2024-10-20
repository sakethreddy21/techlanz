

import InputField from "./InputFeild"; // Assuming InputField is your reusable input component
const Calculator = ({ heading, inputFields, setInputFields }: any) => {
  return (
    <div className="border-2 border-[#00000040] shadow-md flex sm:mx-[200px] mx-5   flex-col">
      <div className="bg-[#DC3545] w-full flex justify-center items-center text-[24px] font-bold text-[#FFFFFF] py-1">
        {heading}
      </div>

      <div className="flex flex-wrap  items-center sm:flex-col w-full xl:max-h-[350px]  p-3 gap-4">
        {inputFields.map((field: any, index: any) => (
          <InputField
            key={index}
            label={field.label} // Directly use the label from the field
            spanText={field.spanText} // Directly use the spanText from the field
            showRange={field.showRange} // Directly use the showRange from the field
            value={field.value}
            setValue={field.onChange} // Pass the onChange handler directly
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;