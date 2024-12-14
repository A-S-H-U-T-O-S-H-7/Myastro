import React from 'react'
import horoscopedata from './horoscopedata'
import Horoscopecard from './Horoscopecard'

const HoroscopeContainer = () => {


    const ZodiacSign = horoscopedata[0].horoscopes.map((item)=><Horoscopecard/>)

    

  return (
    <div className='grid grid-cols-1 py-8 lg:grid-cols-3 gap-5'>
      {ZodiacSign}
    </div>
  )
}

export default HoroscopeContainer
