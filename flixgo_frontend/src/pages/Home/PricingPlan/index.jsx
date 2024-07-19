import React from 'react'
import PageTitle from '../../../components/Home/PageTitle'
import PricingPlan from '../../../components/Home/PricingPlan'
import OurFeature from './OurFeature'
import OurPartners from './OurPartners'

export default function index() {
  return (
    <div>
      <PageTitle />
      <PricingPlan />
      <OurFeature />
      <OurPartners/>
    </div>
  )
}
