import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className="h-scree flex flex-col justify-center items-center">
           
            <h1 class="text-2xl font-bold text-gray-800 mb-4 mt-36">
                Thank You for Submitting Your Details!
            </h1>
            <p class="text-gray-600 mb-6">
                We appreciate your efforts to join us. Our team will review your submission and get back to you shortly. Stay tuned for updates!
            </p>
            <Link
                href="/"
                class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 mb-36"
            >
                Go to Homepage
            </Link>
    
        </div>
    )
}

export default page
