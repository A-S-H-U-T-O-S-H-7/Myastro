import React from 'react'

function KundliMatching() {
  return (
    <div>
    <div className='flex flex-wrap justify-center gap-5 py-10'>
      
      {/* boy's kundli */}
    <div className="w-[360px] md:w-[500px] px-6 py-6 border-4 border-[#B682FE] rounded-lg bg-[#f4f0eb] flex flex-col gap-5 items-center ">

        <div className="w-full bg-[#B682FE] font-bold flex justify-center items-center text-white text-[20px] h-[71px] rounded-[5px]">
        <h2 className=" text-yellow-300 text-[25px] font-heading font-bold">
            Boy's Details
          </h2>
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
          className="w-full border bg-white rounded-md px-3 py-2 text-sm focus:outline-none focus:shadow-md focus:shadow-violet-400 "
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

             

</div>

{/* girl's kundli */}

<div className="w-[360px] md:w-[500px] px-6 py-6 border-4 border-[#B682FE] rounded-lg bg-[#f4f0eb] flex flex-col gap-5 items-center ">

<div className="w-full bg-[#B682FE] font-bold flex justify-center items-center text-white text-[20px] h-[71px] rounded-[5px]">
<h2 className=" text-yellow-300 text-[25px] font-heading font-bold">
            Girl's Details
          </h2>
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
  className="w-full border bg-white rounded-md px-3 py-2 text-sm focus:outline-none focus:shadow-md focus:shadow-violet-400 "
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


</div>
<div> 
</div>
</div>

<div className='flex justify-center'>
<button type="submit" className=" w-[400px]  bg-[#B682FE] text-white px-6 py-2 rounded-md hover:bg-[#8756cb] focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 ease-in-out"
        >
          Get Matching
        </button>
        </div>
</div>

  )
}

export default KundliMatching
