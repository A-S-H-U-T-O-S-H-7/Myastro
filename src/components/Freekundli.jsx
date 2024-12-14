import React from 'react'

function Freekundli() {
  return (
    <div className='flex justify-center py-10'>
      
    <div className="w-[400px] md:w-[560px] px-6 py-6 border-4 border-[#ff4500] rounded-lg bg-[#f4f0eb] flex flex-col gap-5 items-center ">

        <div className="w-full bg-[#ff4500] font-bold flex justify-center items-center text-white text-[20px] h-[71px] rounded-[5px]">
          <h3>GENERATE KUNDLI</h3>
        </div>

        <div className="w-full h-[62px]">
          <label
            className="block text-[18px] font-heading font-bold text-[#333333]"
            htmlFor="name"
          >
            Name :
          </label>
          <input type="text" className="w-full h-[34px] pt-2  focus:shadow-md focus:shadow-violet-400 ring-inset border rounded-[5px] flex outline-none"  id="name" />
        </div>

        <div className="w-full h-[62px] ">
          <label
            className="block text-[18px] font-heading font-bold text-[#333333]"
            htmlFor="name"
          >
            Date of Birth :
          </label>
          <input type="text" className="w-full h-[34px] pt-2  focus:shadow-md focus:shadow-violet-400 ring-inset border rounded-[5px] flex outline-none"  id="name" />
        </div>

        <div className="w-full h-[62px]">
          <label
            className="block text-[18px] font-heading font-bold text-[#333333]"
            htmlFor="name"
          >
            Time of Birth :
          </label>
          <input type="text" className="w-full h-[34px] pt-2  focus:shadow-md focus:shadow-violet-400 ring-inset border rounded-[5px] flex outline-none"  id="name" />
        </div>

        <div className="w-full h-[62px]">
          <label
            className="block text-[18px] font-heading font-bold text-[#333333]"
            htmlFor="name"
          >
            Birth Place :
          </label>
          <input type="text" className="w-full h-[34px] pt-2  focus:shadow-md focus:shadow-violet-400 ring-inset border rounded-[5px] flex outline-none"  id="name" />
        </div>

        <div className="w-full h-[62px]">
          <label
            className="block text-[18px] font-heading font-bold text-[#333333]"
            htmlFor="name"
          >
            Language :
          </label>
          <select
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:shadow-md focus:shadow-violet-400 "
          id="language"
        >
          <option value="" disabled selected>
            --Select Language--
          </option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="marathi">Malaylam</option>
        </select>   
        </div>

        <div className="text-center mt-[60px]  ">
        <button
          type="submit"
          className=" bg-[#ff4500] text-white px-6 py-2 rounded-md hover: focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 ease-in-out"
        >
          Generate
        </button>
        </div>
      

</div>
    </div>
  )
}

export default Freekundli
