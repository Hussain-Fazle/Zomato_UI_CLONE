import React from 'react'
import './nightLife.css'
import Filter from "../common/filters/filters"
import Collection from "../common/collection/collection"
import ExploreSection from '../common/exploreSection/exploresection'
import {nightLife} from "../../data/nightLife"


const nightFilters=[
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
        title: 'Pubs & Bars'
    }
  ]

const nightList = nightLife ;

const NightLife = () => {
  return (
    <div className='max-width'>
      <div className='max-width'>
        <Filter filterList={nightFilters}/>
      </div>
      <Collection />
      <ExploreSection list={nightList} collectionName={"Nightlife: Night clubs, pubs &amp; bar in Jamshedpur"}/>
    </div>
  )
}

export default NightLife
