import React from 'react'
import "./delivery.css"
import Filter from '../common/filters/filters'
import DeliveryCollection from './deliverycollections/deliverycollection'
import TopBrand from './topBrands/topbrand'
import ExploreSection from '../common/exploreSection/exploresection'
import { restaurants } from '../../data/restaurants'

const deliveryFilters=[
  {
      id:1,
      icon:<i class="fi fi-rr-settings-sliders absolute-center"></i>,
      title: 'Filters'
  },
  {
      id:2,
      icon:<i className=''> </i>,
      title: 'Rating: 4.0+'
  },
  {
      id:3,
      icon:<i className=''> </i>,
      title: 'Pure Veg'
  },
  {
      id:4,
      icon:<i className=''> </i>,
      title: 'Cuisines'
  }
]

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
      <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrand />
      <ExploreSection list={restaurantList} collectionName='Food Delivery Restaurants in Jamshedpur'/>
    </div>
  )
}

export default Delivery
