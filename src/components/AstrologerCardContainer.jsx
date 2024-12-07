import React from 'react'
import AstrologerCard from './AstrologerCrad'
import data from './data'

const AstrologerCardContainer = () => {

  const Alldata = data.slice(0, 15);

const demo= Alldata.map(()=><AstrologerCard/>)




  return (
    <div> 
        <div className="px-[10px] justify-center lg:px-[65px] py-4 flex justify-between flex-wrap gap-3 ">
             {demo}
            </div>
      
    </div>
  )
}

export default AstrologerCardContainer
