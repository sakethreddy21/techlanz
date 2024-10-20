import React from 'react'

const SubmitReset = ({handleSubmit, handleReset}:any) => {
  return (
    <div className="flex justify-between sm:mx-[200px] mt-5 px-10 ">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
  )
}

export default SubmitReset