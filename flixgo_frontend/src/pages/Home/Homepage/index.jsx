import React from 'react'
import HomeCarousel from './HomeCarousel'
import RecentlyUpdated from './RecentlyUpdated'
import NowWatching from './NowWatching'
import SelectYourPlan from './SelectYourPlan'
import OurPartner from './OurPartner'

export default function index() {
  return (
    <div>
      <HomeCarousel/>
      <RecentlyUpdated/>
      <NowWatching/>
      <SelectYourPlan/>
      <OurPartner/>
    </div>
  )
}
