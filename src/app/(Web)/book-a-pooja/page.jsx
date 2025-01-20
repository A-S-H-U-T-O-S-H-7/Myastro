import PoojaCard from '@/components/PoojaCard'
import PoojaDetails from '@/components/PoojaDetails';
import React from 'react'

function page() {

    const poojaDetails = [
        {
          "thumbnailTitle": "Rahu-Ketu Ki Shanti",
          "mainTitle": "Rahu & Ketu Graha Shanti Pooja",
          "subTitle": "Removes Negativity & Solves Problems",
          "date": "20 Jan 2025",
          "astrologerImage": "/Cancer.jpg",
          "bgImage": "/blog1.jpg"
        },
        {
          "thumbnailTitle": "Wealth & Prosperity",
          "mainTitle": "Lakshmi Narayan Pooja",
          "subTitle": "Attracts Wealth and Good Fortune",
          "date": "25 Jan 2025",
          "astrologerImage": "/Aries.jpg",
          "bgImage": "/blog2.jpeg"
        },
        {
          "thumbnailTitle": "Health Improvement Pooja",
          "mainTitle": "Mahamrityunjaya Jaap",
          "subTitle": "Brings Peace & Good Health",
          "date": "28 Jan 2025",
          "astrologerImage": "/Aquarius.jpg",
          "bgImage": "/blog3.png"
        },
        {
          "thumbnailTitle": "Career Growth Ritual",
          "mainTitle": "Navgraha Shanti Pooja",
          "subTitle": "Removes Career Obstacles",
          "date": "5 Feb 2025",
          "astrologerImage": "/Capricorn.jpg",
          "bgImage": "/blog4.jpg"
        },
        {
          "thumbnailTitle": "Family Harmony Pooja",
          "mainTitle": "Satyanarayan Katha",
          "subTitle": "Brings Peace and Unity to Family",
          "date": "12 Feb 2025",
          "astrologerImage": "/Leo.jpg",
          "bgImage": "astropic.jpeg"
        },
        {
          "thumbnailTitle": "Positive Energy Boost",
          "mainTitle": "Hanuman Chalisa Paath",
          "subTitle": "Removes Fear and Negative Energy",
          "date": "18 Feb 2025",
          "astrologerImage": "/libra.jpg",
          "bgImage": "/images/pooja-bg6.jpg"
        }
      ]
      

  return <div>
      <div className="px-[10px] lg:px-[65px]">
        <h2 className="text-[30px] pt-4 text-[#3C0184] font-heading font-bold">
          Book a Pooja
        </h2>
      </div>
      <div className="grid grid-cols-1 px-[10px] lg:px-[65px] py-8 lg:grid-cols-3 gap-4 ">
        {poojaDetails.map((poojaDetail,index) => <PoojaCard key={index} details={poojaDetail} />)}
      </div>

      <div>
        <p className='text-[#212529] text-base px-[10px] lg:px-[65px] py-[30px] bg-[#f8f8f8]'>
          Puja is an ancient Hindu ritual, a sacred act of worshiping the
          divine. It is a medium through which we connect with the divine
          energies to seek blessings, express gratitude, and make our wishes
          and prayers heard. We help you to experience divine blessings and
          spiritual harmony with our exclusive online puja services, conducted
          by learned pandits and astrologers. Whether you seek remedial
          measures, enhanced relationships, luck, financial prosperity, or a
          blissful marriage, our pujas cater to various aspects of life for
          your overall well-being.<br/><br/> Astrotalk helps you embrace spirituality
          from the comfort of your home. With Astrotalk's user-friendly
          platform, booking an online puja session has never been easier. Our
          team of learned and experienced pandits and astrologers ensure that
          the rituals are performed with utmost sincerity and accuracy,
          adhering to traditional practices. They guide you through the
          process, making it a meaningful and transformative experience.<br/><br/>
          Booking an online puja session with Astrotalk is just a few clicks
          away. Simply visit our website, browse through our list of puja
          services, select the one that resonates with your requirements, and
          immerse yourself in the spiritual vibrations of the puja.
        </p>
      </div>
    </div>;
}

export default page
