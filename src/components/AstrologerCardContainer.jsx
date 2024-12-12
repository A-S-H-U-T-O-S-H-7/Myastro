import React from 'react'
import AstrologerCard from './AstrologerCrad'
import data from './data'
import UserSignup from './UserSignup'

const AstrologerCardContainer = ({ sliceCount = 30 }) => {

  const Alldata = data.slice(0, sliceCount);

  const demo = Alldata.map(() => <AstrologerCard />)




  return (
    <div>
     <UserSignup/>
      <div className="px-[10px] lg:px-[65px] py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {demo}
      </div>

    </div>
  )
}

export default AstrologerCardContainer
