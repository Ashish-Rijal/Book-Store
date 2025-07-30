import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'

export default function Home() {
  return (
    <div>
    <Banner/>
    <TopSellers/>
    <Recommended/>
    <News/>
    </div>
  )
}
