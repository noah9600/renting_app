import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import ListingCards from '@/components/Listings/Listings'
import React from 'react'

const listings = () => {
  return (
    <div className='bg-gray-100'>
        <Header />
        <div className='mb-16'>
        <ListingCards />
        </div>
        <Footer />
    </div>
  )
}

export default listings