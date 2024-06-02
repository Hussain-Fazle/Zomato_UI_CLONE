import React from 'react'
import './diningOut.css'
import Filter from "../common/filters/filters"
import Collection from "../common/collection/collection"
import ExploreSection from '../common/exploreSection/exploresection'
import {diningOut} from "../../data/diningOut"

const diningFilters=[
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
        title: 'Outdoor Seating'
    },
    {
        id:4,
        icon:<i className=''> </i>,
        title: 'Serves Alcohol'
    },
    {
        id:5,
        icon:<i className=''> </i>,
        title: 'Open Now'
    }
  ]

const diningList = diningOut

const DiningOut = () => {
  return (
    <div className='max-width'>
    <div className='max-width'>
      <Filter filterList={diningFilters} />
    </div>
    <Collection />
    <ExploreSection list={diningList} collectionName={"Trending dining out restaurants in Jamshedpur"}/>
  </div>
  )
}

export default DiningOut
